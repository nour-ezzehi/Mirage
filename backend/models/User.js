import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user' // Set default role
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student' // Reference the Student model
  }]
}, { timestamps: true }); // Automatically create createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);
export default User;
