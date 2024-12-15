import Session from '../models/Session.js';

// @desc    Get all sessions
// @route   GET /api/sessions
// @access  Public or Protected
export const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find()
      .populate('group', 'name timetable') // Assuming Group has these fields
      .populate('student', 'firstName lastName grade'); // Assuming Student has these fields

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sessions', error });
  }
};

// @desc    Get a single session by ID
// @route   GET /api/sessions/:id
// @access  Public or Protected
export const getSessionById = async (req, res) => {
  const { id } = req.params;

  try {
    const session = await Session.findById(id)
      .populate('group', 'name timetable')
      .populate('student', 'firstName lastName grade');

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching session', error });
  }
};

// @desc    Create a new session
// @route   POST /api/sessions
// @access  Protected
export const createSession = async (req, res) => {
  const { date, group, student } = req.body;

  try {
    const newSession = new Session({
      date,
      group,
      student,
    });

    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: 'Error creating session', error });
  }
};

// @desc    Update a session
// @route   PUT /api/sessions/:id
// @access  Protected
export const updateSession = async (req, res) => {
  const { id } = req.params;
  const { date, group, student } = req.body;

  try {
    const session = await Session.findByIdAndUpdate(
      id,
      { date, group, student },
      { new: true, runValidators: true } // Return updated session and validate inputs
    );

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Error updating session', error });
  }
};

// @desc    Delete a session
// @route   DELETE /api/sessions/:id
// @access  Protected
export const deleteSession = async (req, res) => {
  const { id } = req.params;

  try {
    const session = await Session.findByIdAndDelete(id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.status(200).json({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting session', error });
  }
};
