import express from 'express';

import {
  createParent,
  getAllParents,
  getParentById,
  updateParent,
  deleteParent
} from '../controllers/parentController.js';

const router = express.Router();

// CRUD routes for Parent
router.post('/parents', createParent);
router.get('/parents', getAllParents); // Get all parents
router.get('/parents/:id', getParentById); // Get Parent by ID
router.put('/parents/:id', updateParent);
router.delete('/parents/:id', deleteParent); // Delete Parent

export default router;
