import { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: Number, required: false },
  company: { type: String, required: false },
  notes: { type: String, required: false }
})

// Ensures names are unique
userSchema.plugin(uniqueValidator, { message: '{PATH} is already in use' })

export default userSchema
