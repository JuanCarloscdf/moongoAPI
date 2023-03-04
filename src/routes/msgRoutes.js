import { Router } from 'express'
import * as msgFunc from '../controllers/msgControllers.js'
import { autentication } from '../middlewares/auth.js'
const router = Router()
router.get('/msg/:id', msgFunc.msgGetController)
router.post('/msg/:id', autentication, msgFunc.msgPostController)
router.put('/msg/:id', msgFunc.msgPutController)
router.delete('/msg/:id', msgFunc.msgDeleteController)
router.patch('/msg', msgFunc.msgPatchController)
export default router
