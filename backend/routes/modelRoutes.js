import express from 'express';

import {
  createModel,
  getAllModels,
  getModelById,
  updateModel,
  deleteModel
} from '../controllers/modelController.js';

const router = express.Router();

// CRUD routes for Model
router.post('/models', createModel);
router.get('/models', getAllModels); // Get all Models
router.get('/models/:id', getModelById); // Get Model by ID
router.put('/models/:id', updateModel);
router.delete('/models/:id', deleteModel); // Delete Model

export default router;
