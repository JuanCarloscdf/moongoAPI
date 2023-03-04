import bcrypt from 'bcrypt'
import User from '../models/user.js'
// congig jwt
import jwt from 'jsonwebtoken'

export const loginPostController = async (req, res) => {
  const { email, password, id } = req.body
  const user = await User.findById(id)
  const isCorrectPass = user === null ? false : await bcrypt.compare(String(password), user.password)
  if (!isCorrectPass) {
    res.status(401).json({
      error: 'invalid user or password'
    })
  }
  const payload = {
    _id: user._id,
    username: user.username
  }
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 60 * 60 * 24 })
  res.send({
    user: user.name,
    email: user.email,
    token
  })
}
