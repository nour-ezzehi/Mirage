// routes/authRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Login route for users
router.post('/login-user', loginUser);

// Register route for users
router.post('/register-user', registerUser);

export default router;
