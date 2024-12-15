import Model from '../models/Model.js';

// @desc    Get all models
// @route   GET /api/models
// @access  Public or Protected
export const getAllModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching models', error });
  }
};

// @desc    Get a single model by ID
// @route   GET /api/models/:id
// @access  Public or Protected
export const getModelById = async (req, res) => {
  const { id } = req.params;
  try {
    const model = await Model.findById(id);
    if (!model) {
      return res.status(404).json({ message: 'Model not found' });
    }
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching model', error });
  }
};

// @desc    Create a new model
// @route   POST /api/models
// @access  Protected
export const createModel = async (req, res) => {
  const { name, sticker } = req.body;

  try {
    const newModel = new Model({
      name,
      sticker,
    });
    await newModel.save();
    res.status(201).json(newModel);
  } catch (error) {
    res.status(500).json({ message: 'Error creating model', error });
  }
};

// @desc    Update a model
// @route   PUT /api/models/:id
// @access  Protected
export const updateModel = async (req, res) => {
  const { id } = req.params;
  const { name, sticker } = req.body;

  try {
    const model = await Model.findByIdAndUpdate(
      id,
      { name, sticker },
      { new: true, runValidators: true } // Return updated model and validate inputs
    );

    if (!model) {
      return res.status(404).json({ message: 'Model not found' });
    }

    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ message: 'Error updating model', error });
  }
};

// @desc    Delete a model
// @route   DELETE /api/models/:id
// @access  Protected
export const deleteModel = async (req, res) => {
  const { id } = req.params;

  try {
    const model = await Model.findByIdAndDelete(id);

    if (!model) {
      return res.status(404).json({ message: 'Model not found' });
    }

    res.status(200).json({ message: 'Model deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting model', error });
  }
};
