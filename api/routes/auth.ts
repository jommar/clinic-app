import { Router } from 'express'
import { login } from '../controllers/authController'

const router = Router()

router.get('/', login)

export default router
