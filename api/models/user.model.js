import mongoose from 'mongoose';

// 1. Define the User schema with necessary fields
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// 2. Create and export the User model
const User = mongoose.model('User', userSchema);

export default User;
