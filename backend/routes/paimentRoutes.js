import express from 'express';

import {
  createPaiment,
  getAllPaiments,
  getPaimentById,
  updatePaiment,
  deletePaiment
} from '../controllers/paimentController.js';

const router = express.Router();

// CRUD routes for Paiment
router.post('/paiments', createPaiment);
router.get('/paiments', getAllPaiments); // Get all Paiments
router.get('/paiments/:id', getPaimentById); // Get Paiment by ID
router.put('/paiments/:id', updatePaiment);
router.delete('/paiments/:id', deletePaiment); // Delete Paiment

export default router;
