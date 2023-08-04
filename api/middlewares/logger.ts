import { Request, Response, NextFunction } from 'express'
import chalk from 'chalk'

const timeLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.cyanBright(`Time: ${Date.now()}`))
  const { body } = req
  if (body) {
    console.log(chalk.bgCyanBright(JSON.stringify(body)))
  }
  next()
}

export default timeLogger
