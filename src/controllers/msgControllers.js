
import Msg from '../models/msg.js'

export const msgGetController = async (req, res, next) => {
  try {
    const id = req.params.id
    const statmsg = await Msg.find({ id })
    console.log(statmsg)

    res.json(statmsg)
  } catch (err) {
    next(err)
  }
}
export const msgPostController = async (req, res) => {
  console.log('userdata endpoint', req.userData)
  const { id } = req.params
  const { content, important = false } = req.body

  const newMsg = {
    content,
    date: new Date(),
    important,
    user: id
  }

  const msgPostStatus = await Msg.create(newMsg)
  console.log(msgPostStatus)

  res.send('msg post controller')
}
export const msgPutController = async (req, res) => {
  const { id } = req.params
  console.log(req.body, id)
  const updatemsg = await Msg.updateOne({ id }, req.body)
  console.log(updatemsg)
  res.send('msg put controller')
}

export const msgDeleteController = async (req, res) => {
  const { id } = req.params
  console.log(id)
  const deleted = await Msg.deleteOne({ id })
  console.log(deleted)

  res.send('msg delete controller')
}
export const msgPatchController = async (req, res) => {
  res.send('msg patch controller')
}
