import express, { Express } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import timeLogger from './middlewares/logger'
import chalk from 'chalk'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(timeLogger)
app.use('/auth', routes.authRoutes)

app.listen(port, () => {
  console.log(chalk.greenBright(`Server started on port: ${port}`))
  console.log(chalk.greenBright(`http://localhost:${port}`))
})
