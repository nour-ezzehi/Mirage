// models/Group.js
import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  timetable: {
    type: String,
    required: true
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: true
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Group = mongoose.model('Group', groupSchema);
export default Group;
