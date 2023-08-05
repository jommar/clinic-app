import express, { Express } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { timeLogger, authenticate } from './middlewares'
import * as logs from './lib/logs'
import chalk from 'chalk'
import session from 'express-session'
import { connect } from './lib/mongose'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const connectDb = async () => {
  try {
    const response = await connect()
    console.log(chalk.greenBright(`DB Connected ${response.uri}`))
  } catch (e) {
    console.log(
      chalk.redBright(
        `Could not connect to database ${process.env.DB}: ${e.message}`,
      ),
    )
  } finally {
    logs.spacer()
  }
}

app.use(
  session({
    secret: process.env.SESSION_SECRET || '', // A secret key for session, you should store it in env variables.
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store.
    cookie: { secure: process.env.APP_ENV === 'production' }, // true if using https
  }),
)
app.use(express.json())
app.use(timeLogger)
app.use('/auth', routes.authRoutes)
app.use(authenticate)
app.use('/user', routes.userRoutes)
app.use('/db', routes.dbRoutes)

app.listen(port, () => {
  logs.time()
  console.log(chalk.greenBright(`Server started on port: ${port}`))
  console.log(chalk.greenBright(`http://localhost:${port}`))
})
connectDb()
