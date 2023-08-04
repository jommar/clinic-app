import { Request, Response } from 'express'
import models from '../models'

export const createDocument = async (req: Request, res: Response) => {
  try {
    const model: string = req.params.model
    const { body } = req
    const document = await models[model].create(body)
    res.send(document)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}

export const readById = async (req: Request, res: Response) => {
  try {
    const { model, id } = req.params
    const document = await models[model].findById(id)
    res.send(document)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}

export const readDocument = async (req: Request, res: Response) => {
  try {
    const { model } = req.params
    const document = await models[model].find()
    res.send(document)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}

export const updateById = async (req: Request, res: Response) => {
  try {
    const { model, id } = req.params
    const { body } = req
    const document = await models[model].findByIdAndUpdate(id, body, {
      new: true,
    })
    res.send(document)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
