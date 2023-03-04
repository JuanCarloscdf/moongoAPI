import { model, Schema } from 'mongoose'

const msgSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

export default model('Msg', msgSchema)
