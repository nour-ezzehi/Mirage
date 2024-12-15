import Program from '../models/Program.js';

// @desc    Get all programs
// @route   GET /api/programs
// @access  Public or Protected
export const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching programs', error });
  }
};

// @desc    Get a single program by ID
// @route   GET /api/programs/:id
// @access  Public or Protected
export const getProgramById = async (req, res) => {
  const { id } = req.params;

  try {
    const program = await Program.findById(id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching program', error });
  }
};

// @desc    Create a new program
// @route   POST /api/programs
// @access  Protected
export const createProgram = async (req, res) => {
  const { name, duration, description } = req.body;

  try {
    const newProgram = new Program({
      name,
      duration,
      description,
    });

    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(500).json({ message: 'Error creating program', error });
  }
};

// @desc    Update a program
// @route   PUT /api/programs/:id
// @access  Protected
export const updateProgram = async (req, res) => {
  const { id } = req.params;
  const { name, duration, description } = req.body;

  try {
    const program = await Program.findByIdAndUpdate(
      id,
      { name, duration, description },
      { new: true, runValidators: true } // Return updated program and validate inputs
    );

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error updating program', error });
  }
};

// @desc    Delete a program
// @route   DELETE /api/programs/:id
// @access  Protected
export const deleteProgram = async (req, res) => {
  const { id } = req.params;

  try {
    const program = await Program.findByIdAndDelete(id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting program', error });
  }
};
