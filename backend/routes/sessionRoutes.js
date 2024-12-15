import express from 'express';

import {
  createSession,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession
} from '../controllers/sessionController.js';

const router = express.Router();

// CRUD routes for Session
router.post('/sessions', createSession);
router.get('/sessions', getAllSessions); // Get all Sessions
router.get('/sessions/:id', getSessionById); // Get Session by ID
router.put('/sessions/:id', updateSession);
router.delete('/sessions/:id', deleteSession); // Delete Session

export default router;
