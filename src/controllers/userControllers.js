// models
// dependecies
import bcrypt from 'bcrypt'
import User from '../models/user.js'
export const userGetController = async (req, res) => {
  console.log(req.query)
  const response = await User.findOne({ email: req.query.email, password: req.query.password })
  console.log(response)
  res.send('hola desde controladores get')
}
export const userPostController = async (req, res) => {
  try {
    const { name, username, email, password } = req.body
    // password encripted by Bcrypt dependency
    const hashedPass = await bcrypt.hash(password, 10)
    const newUser = {
      name,
      username,
      email,
      password: hashedPass
    }
    const createstatus = await User.create(newUser)
    console.log(createstatus)
    res.send(name)
  } catch (error) {
    console.log(error._message)
    res.send(error._message)
  }
}
export const userPutController = async (req, res) => {
  const { name, password } = req.body
  console.log(name, password)
  const updateState = await User.updateOne({ name }, { password })
  console.log(updateState)
  res.send('hola desde controladores put')
}
export const userDeleteController = async (req, res) => {
  const deleted = await User.deleteOne({ email: req.query.email })
  console.log(deleted)
  res.send('hola desde controladores delte')
}
export const userPatchController = (req, res) => {
  res.send('hola desde controladores patch')
}
