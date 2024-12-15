import Student from '../models/Student.js';
import Paiment from '../models/Paiment.js';

// @desc    Get all students
// @route   GET /api/students
// @access  Public or Protected
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate('parent', 'firstName lastName email') // Populate parent details
      .populate('paiment'); // Populate paiment details
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

// @desc    Get a single student by ID
// @route   GET /api/students/:id
// @access  Public or Protected
export const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id)
      .populate('parent', 'firstName lastName email') // Populate parent details
      .populate('paiment'); // Populate paiment details
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error });
  }
};

// @desc    Create a new student
// @route   POST /api/students
// @access  Protected
export const createStudent = async (req, res) => {
  const { firstName, lastName, birthday, grade, group, parent } = req.body;

  try {
    // First, create a new Paiment record with "unpaid" status
    const paiement = new Paiment({ // Reference to the Parent's ObjectId (incorrectly used before)
      Montant: 0,         // Set the initial amount to 0, // Set default payment mode
      status: 'unpaid',   // Set payment status to "unpaid"
    });

    // Save the Paiment record
    await paiement.save();

    // Now, create the Student record
    const newStudent = new Student({
      firstName,
      lastName,
      birthday,
      grade,
      group,
      parent,  // Reference to the Parent model
      paiment: paiement._id,  // Link the created Paiment to the Student
    });

    // Save the Student record
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error });
  }
};


// @desc    Update a student
// @route   PUT /api/students/:id
// @access  Protected
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, birthday, grade, group, parent, paiment } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { firstName, lastName, birthday, grade, group, parent, paiment },
      { new: true, runValidators: true } // Return updated student and validate inputs
    );

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

// @desc    Delete a student
// @route   DELETE /api/students/:id
// @access  Protected
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};
