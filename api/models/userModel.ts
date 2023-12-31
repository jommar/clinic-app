// models/User.ts
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    roles: {
      type: [String],
      default: ['user'],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

// Hash the password before saving
UserSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

export const User = mongoose.model('User', UserSchema)

export default User
