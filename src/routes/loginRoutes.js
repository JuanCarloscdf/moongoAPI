import { Router } from 'express'
import { loginPostController } from '../controllers/loginController.js'
import { autentication } from '../middlewares/auth.js'
const router = Router()
router.post('/login', autentication, loginPostController)
export default router
