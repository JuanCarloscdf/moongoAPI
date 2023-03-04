export const handleError = (err, req, res, next) => {
  if (err.name === 'CastError') {
    res.status(400).send('<h1>corrige la url</h1>')
  }
}
