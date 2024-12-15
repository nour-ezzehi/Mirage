import express from 'express';

import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

// CRUD routes for Student
router.post('/students', createStudent);
router.get('/students', getAllStudents); // Get all Students
router.get('/students/:id', getStudentById); // Get Student by ID
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent); // Delete Student

export default router;
