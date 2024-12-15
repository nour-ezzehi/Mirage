// models/Student.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the User model as the parent
    required: true
  },
  paiment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paiment', // Reference the User model as the parent
    required: false
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Student = mongoose.model('Student', studentSchema);
export default Student;
