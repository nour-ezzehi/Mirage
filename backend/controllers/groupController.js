import Group from '../models/Group.js';

// @desc    Get all groups
// @route   GET /api/groups
// @access  Public or Protected (depending on your app's design)
export const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find().populate('program'); // Populate the program field with referenced data
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching groups', error });
  }
};

// @desc    Get a single group by ID
// @route   GET /api/groups/:id
// @access  Public or Protected
export const getGroupById = async (req, res) => {
  const { id } = req.params;
  try {
    const group = await Group.findById(id).populate('program');
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching group', error });
  }
};

// @desc    Create a new group
// @route   POST /api/groups
// @access  Protected
export const createGroup = async (req, res) => {
  const { name, timetable, program } = req.body;
  try {
    const newGroup = new Group({ name, timetable, program });
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ message: 'Error creating group', error });
  }
};

// @desc    Update an existing group
// @route   PUT /api/groups/:id
// @access  Protected
export const updateGroup = async (req, res) => {
  const { id } = req.params;
  const { name, timetable, program } = req.body;

  try {
    const group = await Group.findByIdAndUpdate(
      id,
      { name, timetable, program },
      { new: true, runValidators: true } // Return updated group and run validation
    );

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: 'Error updating group', error });
  }
};

// @desc    Delete a group
// @route   DELETE /api/groups/:id
// @access  Protected
export const deleteGroup = async (req, res) => {
  const { id } = req.params;

  try {
    const group = await Group.findByIdAndDelete(id);

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    res.status(200).json({ message: 'Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting group', error });
  }
};
