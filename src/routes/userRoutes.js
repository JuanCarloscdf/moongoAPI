import { Router } from 'express'
import { autentication } from '../middlewares/auth.js'
import * as userfunctions from '../controllers/userControllers.js'
const router = Router()
router.get('/user', autentication, userfunctions.userGetController)
router.post('/user', autentication, userfunctions.userPostController)
router.put('/user', autentication, userfunctions.userPutController)
router.delete('/user', autentication, userfunctions.userDeleteController)
router.patch('/user', autentication, userfunctions.userPatchController)
export default router
