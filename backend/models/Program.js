// models/Program.js
import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Program = mongoose.model('Program', programSchema);
export default Program;
