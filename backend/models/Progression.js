// models/Progression.js
import mongoose from 'mongoose';

const progressionSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Model',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Progression = mongoose.model('Progression', progressionSchema);
export default Progression;
