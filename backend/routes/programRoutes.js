import express from 'express';

import {
  createProgram,
  getAllPrograms,
  getProgramById,
  updateProgram,
  deleteProgram
} from '../controllers/programController.js';

const router = express.Router();

// CRUD routes for Program
router.post('/programs', createProgram);
router.get('/programs', getAllPrograms); // Get all Programs
router.get('/programs/:id', getProgramById); // Get Program by ID
router.put('/programs/:id', updateProgram);
router.delete('/programs/:id', deleteProgram); // Delete Program

export default router;
