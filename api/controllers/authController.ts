import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const login = (req: Request, res: Response) => {
  const { body } = req
  if (!body.username) {
    res.status(400).json({ message: 'Invalid credentials' })
  }
  if (!body.password) {
    res.status(400).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign(body, process.env.JWT_KEY || '')
  req.session.user = body.username
  res.send({ token })
}

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err)=>{
    console.log('SESSION DESTROY')
    res.send({ message: 'Logged out' })
  })
}
