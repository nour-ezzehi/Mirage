import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access. No token provided." });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "Server configuration error. JWT secret missing." });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(403).json({ message: "Token has expired. Please log in again." });
      }
      return res.status(403).json({ message: "Failed to authenticate token." });
    }

    try {
      // Fetch user details using the ID decoded from the token
      const user = await mongoose.model('User').findById(decoded.id).populate('students');

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Attach user information to the request object
      req.user = {
        id: user._id, // User ID
        userName: user.userName,
        email: user.email,
        role: user.role,
        students: user.students // List of referenced students
      };

      next();
    } catch (error) {
      return res.status(500).json({ message: "Error fetching user data." });
    }
  });
};

export default authMiddleware;
