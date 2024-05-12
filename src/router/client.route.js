import { Router } from 'express'
import {
  findAll,
  findById,
  update,
  removeById,
  create,
} from '../controller/client.controller.js'
const clientRouter = Router()

clientRouter.post('/client', create)
clientRouter.get('/client/:id', findById)
clientRouter.get('/client', findAll)
clientRouter.put('/client/:id', update)
clientRouter.delete('/client/:id', removeById)

export default clientRouter
