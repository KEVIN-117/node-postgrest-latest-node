import morgan from 'morgan'
import express from 'express'
import clientRouter from './router/client.route.js'
import userRouter from './router/user.route.js'
import invoiceRouter from './router/invoice.route.js'
import { dirname } from 'path'
import os from 'os'

const app = express()
const osPlatform = os.platform()

const __dirname = dirname(new URL(import.meta.url).pathname).substring(
  osPlatform === 'win32' ? 1 : 0,
)

app.use(express.static(__dirname + '/static/build'))

app.get('/', (req, res) => res.sendFile(__dirname + '/static/build/index.html'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', clientRouter)
app.use('/api', userRouter)
app.use('/api', invoiceRouter)
export default app
