import { Request, Response } from 'express'
import models from '../models'

export const getUsers = async (req: Request, res: Response) => {
  const users = await models.User.find()
  res.send({ users })
}
