import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Helper function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, userName: user.userName, role: user.role },  // Ensure you're using the correct field names here
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }  // Default to 1 hour if not specified
  );
};

// User login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare the hashed password with the input password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate a JWT token
    const token = generateToken(user);
    
    // Respond with the token and user data
    res.json({
      token,
      userData: { id: user._id, userName: user.userName, role: user.role }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// User registration
export const registerUser = async (req, res) => {
  const { userName, email, password, role } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      userName,  // Use correct field name (userName)
      email,
      password: hashedPassword,
      role
    });

    // Save the user
    await newUser.save();

    // Generate a JWT token
    const token = generateToken(newUser);
    
    // Respond with the message and token
    res.status(201).json({
      message: 'User registered successfully.',
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};
