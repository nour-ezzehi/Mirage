import mongoose from 'mongoose';

const presenceSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  }
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const Presence = mongoose.model('Presence', presenceSchema);
export default Presence;
