import { Router } from 'express'
import {
  createDocument,
  readById,
  readDocument,
} from '../controllers/dbController'

const router = Router()

router.post('/create/:model', createDocument)
router.get('/:model/:id', readById)
router.get('/:model', readDocument)

export default router
