import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Session = mongoose.model('Session', sessionSchema);
export default Session;
