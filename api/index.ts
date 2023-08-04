import express, { Express } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { timeLogger, authenticate } from './middlewares'
import chalk from 'chalk'
import session from 'express-session'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(
  session({
    secret: 'my-secret-key', // A secret key for session, you should store it in env variables.
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store.
    cookie: { secure: false }, // true if using https
  }),
)
app.use(express.json())
app.use(timeLogger)
app.use('/auth', routes.authRoutes)
app.use(authenticate)
app.use('/user', routes.userRoutes)

app.listen(port, () => {
  console.log(chalk.greenBright(`Server started on port: ${port}`))
  console.log(chalk.greenBright(`http://localhost:${port}`))
})
