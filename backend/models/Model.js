// models/Model.js
import mongoose from 'mongoose';

const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sticker: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Model = mongoose.model('Model', modelSchema);
export default Model;
