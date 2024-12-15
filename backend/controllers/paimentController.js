import Paiment from '../models/Paiment.js';

// @desc    Get all paiements
// @route   GET /api/paiements
// @access  Public or Protected
export const getAllPaiments = async (req, res) => {
  try {
    const paiments = await Paiment.find().populate('EnfantID', 'firstName lastName'); // Assuming "Enfant" model has these fields
    res.status(200).json(paiments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching paiements', error });
  }
};

// @desc    Get a single paiement by ID
// @route   GET /api/paiements/:id
// @access  Public or Protected
export const getPaimentById = async (req, res) => {
  const { id } = req.params;
  try {
    const paiment = await Paiment.findById(id).populate('EnfantID', 'firstName lastName');
    if (!paiment) {
      return res.status(404).json({ message: 'Paiement not found' });
    }
    res.status(200).json(paiment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching paiement', error });
  }
};

// @desc    Create a new paiement
// @route   POST /api/paiements
// @access  Protected
export const createPaiment = async (req, res) => {
  const { EnfantID, Montant, Date, ModePaiment } = req.body;

  try {
    const newPaiment = new Paiment({
      EnfantID,
      Montant,
      Date,
      ModePaiment,
    });

    await newPaiment.save();
    res.status(201).json(newPaiment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating paiement', error });
  }
};

// @desc    Update a paiement
// @route   PUT /api/paiements/:id
// @access  Protected
export const updatePaiment = async (req, res) => {
  const { id } = req.params;
  const { EnfantID, Montant, Date, ModePaiment } = req.body;

  try {
    const paiment = await Paiment.findByIdAndUpdate(
      id,
      { EnfantID, Montant, Date, ModePaiment },
      { new: true, runValidators: true } // Return updated paiement and validate inputs
    );

    if (!paiment) {
      return res.status(404).json({ message: 'Paiement not found' });
    }

    res.status(200).json(paiment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating paiement', error });
  }
};

// @desc    Delete a paiement
// @route   DELETE /api/paiements/:id
// @access  Protected
export const deletePaiment = async (req, res) => {
  const { id } = req.params;

  try {
    const paiment = await Paiment.findByIdAndDelete(id);

    if (!paiment) {
      return res.status(404).json({ message: 'Paiment not found' });
    }

    res.status(200).json({ message: 'Paiment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting paiment', error });
  }
};
