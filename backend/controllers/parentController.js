import User from '../models/User.js'; // Adjust the path if necessary
import Student from '../models/Student.js'; // Adjust the path if necessary
import Presence from '../models/Presence.js'; // Adjust the path if necessary
import Session from '../models/Session.js'; // Adjust the path if necessary

// Create a new parent user
export const createParent = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Create the parent user with role 'parent'
    const newParent = new User({ userName, email, password, role: 'parent' });
    const savedParent = await newParent.save();

    res.status(201).json({
      message: 'Parent user created successfully',
      data: savedParent,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating parent user',
      error: error.message,
    });
  }
};

// Get all parents
export const getAllParents = async (req, res) => {
  try {
    const parents = await User.find({ role: 'parent' });

    // Attach students to each parent dynamically
    const parentsWithStudents = await Promise.all(
      parents.map(async (parent) => {
        const students = await Student.find({ parent: parent._id });
        return { ...parent.toObject(), students }; // Combine parent and their students
      })
    );

    res.status(200).json({
      message: 'Parent users retrieved successfully',
      data: parentsWithStudents,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving parent users',
      error: error.message,
    });
  }
};

// Get a specific parent by ID (with children and presence details)
export const getParentById = async (req, res) => {
  try {
    const { id } = req.params;
    const parent = await User.findOne({ _id: id, role: 'parent' });

    if (!parent) {
      return res.status(404).json({ message: 'Parent user not found' });
    }

    // Fetch associated students
    const students = await Student.find({ parent: parent._id });

    // Fetch presence details for each student
    const studentsWithPresence = await Promise.all(
      students.map(async (student) => {
        const presenceRecords = await Presence.find({ student: student._id }).populate('session');
        return {
          ...student.toObject(),
          presence: presenceRecords.map((record) => ({
            status: record.status,
            session: record.session,
          })),
        };
      })
    );

    res.status(200).json({
      message: 'Parent user retrieved successfully',
      data: { ...parent.toObject(), students: studentsWithPresence },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving parent user',
      error: error.message,
    });
  }
};

// Update a specific parent by ID
export const updateParent = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Update only if role = 'parent'
    const updatedParent = await User.findOneAndUpdate(
      { _id: id, role: 'parent' },
      updates,
      { new: true }
    );

    if (!updatedParent) {
      return res.status(404).json({ message: 'Parent user not found' });
    }

    res.status(200).json({
      message: 'Parent user updated successfully',
      data: updatedParent,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating parent user',
      error: error.message,
    });
  }
};

// Delete a specific parent by ID
export const deleteParent = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete only if role = 'parent'
    const deletedParent = await User.findOneAndDelete({ _id: id, role: 'parent' });

    if (!deletedParent) {
      return res.status(404).json({ message: 'Parent user not found' });
    }

    res.status(200).json({
      message: 'Parent user deleted successfully',
      data: deletedParent,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting parent user',
      error: error.message,
    });
  }
};
