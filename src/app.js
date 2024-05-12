import morgan from 'morgan'
import express from 'express'
import clientRouter from './router/client.route.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', clientRouter)

export default app
