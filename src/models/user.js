import { model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new Schema({
  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  notes: [{ type: Schema.Types.ObjectId, ref: 'Msg' }]
})

/* userSchema.set('toJSON', {
  transform: (doc, res, options) => {
    delete res.password
  }
}) */

userSchema.plugin(uniqueValidator)
export default model('User', userSchema)
