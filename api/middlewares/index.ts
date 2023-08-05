import { Request, Response, NextFunction } from 'express'
import chalk from 'chalk'
import * as logs from '../lib/logs'

const timeLogger = (req: Request, res: Response, next: NextFunction) => {
  logs.time()
  const { body } = req
  if (body) {
    console.log(
      chalk.cyanBright(
        `${req.protocol}://${req.get('host')}${req.originalUrl}`,
      ),
    )
    console.log(chalk.bgCyanBright(JSON.stringify(body)))
  }
  console.log(`User: ${req.session?.user}`)
  if (!req.session || !req.session.user) {
    console.log(chalk.redBright('Unauthorized'))
  }
  logs.spacer()
  next()
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.user) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }
  next()
}

export { timeLogger, authenticate }
