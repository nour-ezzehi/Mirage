import express from 'express';

import {
  createProgression,
  getAllProgressions,
  getProgressionById,
  updateProgression,
  deleteProgression
} from '../controllers/progressionController.js';

const router = express.Router();

// CRUD routes for Progression
router.post('/progressions', createProgression);
router.get('/progressions', getAllProgressions); // Get all Progressions
router.get('/progressions/:id', getProgressionById); // Get Progression by ID
router.put('/progressions/:id', updateProgression);
router.delete('/progressions/:id', deleteProgression); // Delete Progression

export default router;
