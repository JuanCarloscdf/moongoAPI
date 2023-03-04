import jwt from 'jsonwebtoken'

export const autentication = (req, res, next) => {
  const token = req.get('Authorization')
  console.log(token)
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 'error',
        error: err
      })
    }

    req.userData = decoded
    next()
  })
}
