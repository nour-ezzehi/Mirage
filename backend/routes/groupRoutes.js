import express from 'express';

import {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup
} from '../controllers/groupController.js';

const router = express.Router();

// CRUD routes for Group
router.post('/groups', createGroup);
router.get('/groups', getAllGroups); // Get all Groups
router.get('/groups/:id', getGroupById); // Get Group by ID
router.put('/groups/:id', updateGroup);
router.delete('/groups/:id', deleteGroup); // Delete Group

export default router;
