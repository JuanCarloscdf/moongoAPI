import mongoose from 'mongoose'
const { NODE_ENV } = process.env
console.log(NODE_ENV)
export const mongoConection = () => {
  const MONGO_HOST = process.env.MONGO_HOST || 'localhost'
  const MONGO_USER = process.env.MONGO_USER || 'user'
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password'
  const MONGO_DATABASE_P = NODE_ENV === 'test' ? process.env.MONGO_DATABASE_TEST : process.env.MONGO_DATABASE
  const MONGO_PORT = process.env.MONGO_PORT || 27017

  mongoose.set('strictQuery', true)
  const URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE_P}`
  const uri2 = 'mongodb://user:pasword@localhost:27017/test'
  console.log(URI)
  const options = {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin'

  }
  mongoose.connect(URI, options)
    .then(_ => console.log('**************daba base conected************'))
    .then(err => { if (err) console.log(err) })
}

const conecToDB = async () => {
  await mongoose.connect(URI, options)
}
