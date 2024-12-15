import Progression from '../models/Progression.js';

// @desc    Get all progressions
// @route   GET /api/progressions
// @access  Public or Protected
export const getAllProgressions = async (req, res) => {
  try {
    const progressions = await Progression.find()
      .populate('model', 'name sticker') // Assuming Model has these fields
      .populate('student', 'firstName lastName grade'); // Assuming Student has these fields

    res.status(200).json(progressions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progressions', error });
  }
};

// @desc    Get a single progression by ID
// @route   GET /api/progressions/:id
// @access  Public or Protected
export const getProgressionById = async (req, res) => {
  const { id } = req.params;

  try {
    const progression = await Progression.findById(id)
      .populate('model', 'name sticker')
      .populate('student', 'firstName lastName grade');

    if (!progression) {
      return res.status(404).json({ message: 'Progression not found' });
    }

    res.status(200).json(progression);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progression', error });
  }
};

// @desc    Create a new progression
// @route   POST /api/progressions
// @access  Protected
export const createProgression = async (req, res) => {
  const { status, model, student } = req.body;

  try {
    const newProgression = new Progression({
      status,
      model,
      student,
    });

    await newProgression.save();
    res.status(201).json(newProgression);
  } catch (error) {
    res.status(500).json({ message: 'Error creating progression', error });
  }
};

// @desc    Update a progression
// @route   PUT /api/progressions/:id
// @access  Protected
export const updateProgression = async (req, res) => {
  const { id } = req.params;
  const { status, model, student } = req.body;

  try {
    const progression = await Progression.findByIdAndUpdate(
      id,
      { status, model, student },
      { new: true, runValidators: true } // Return updated progression and validate inputs
    );

    if (!progression) {
      return res.status(404).json({ message: 'Progression not found' });
    }

    res.status(200).json(progression);
  } catch (error) {
    res.status(500).json({ message: 'Error updating progression', error });
  }
};

// @desc    Delete a progression
// @route   DELETE /api/progressions/:id
// @access  Protected
export const deleteProgression = async (req, res) => {
  const { id } = req.params;

  try {
    const progression = await Progression.findByIdAndDelete(id);

    if (!progression) {
      return res.status(404).json({ message: 'Progression not found' });
    }

    res.status(200).json({ message: 'Progression deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting progression', error });
  }
};
