import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import models from '../models'
import bcrypt from 'bcrypt'
import { config } from 'dotenv'
config

export const login = async (req: Request, res: Response) => {
  const { body } = req
  if (!body.username) {
    res.status(400).json({ message: 'Invalid credentials' })
    return
  }
  if (!body.password) {
    res.status(400).json({ message: 'Invalid credentials' })
    return
  }

  const user = await models.User.findOne({ username: body.username })
  if (!user) {
    res.status(400).json({ message: `User not found: ${body.username}` })
    return
  }
  const validPassword = await bcrypt.compare(body.password, user.password)
  if (!validPassword) {
    res.status(400).json({ message: 'Invalid credentials' })
    return
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: '1h',
  })
  req.session.user = body.username

  res.send({ token })
}

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    console.log('SESSION DESTROY')
    res.send({ message: 'Logged out' })
  })
}

export const register = async (req: Request, res: Response) => {
  const { body } = req
  if (!body.username) {
    res.status(400).json({ message: 'Username required.' })
    return
  }
  if (!body.password) {
    res.status(400).json({ message: 'Password required.' })
    return
  }
  if (!body.email) {
    res.status(400).json({ message: 'Email required.' })
    return
  }
  try {
    await models.User.create({
      email: body.email,
      username: body.username,
      password: body.password,
    })
    res.send({ message: `User created ${body.username}` })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
