import { Request, Response } from 'express'
import models from '../models'

export const create = async (req: Request, res: Response) => {
  try {
    const model: string = req.params.model
    const { body } = req
    const document = await models[model].create(body)
    res.send(document)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
