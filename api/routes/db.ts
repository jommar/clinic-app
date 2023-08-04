import { Router } from 'express'
import {
  createDocument,
  readById,
  readDocument,
  updateById,
} from '../controllers/dbController'

const router = Router()

router.post('/create/:model', createDocument)
router.get('/:model/:id', readById)
router.get('/:model', readDocument)
router.put('/:model/:id', updateById)

export default router
