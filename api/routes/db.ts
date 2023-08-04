import { Router } from 'express'
import { create } from '../controllers/dbController'

const router = Router()

router.post('/create/:model', create)

export default router
