import { Router } from 'express'
import {
  create,
  findAll,
  findById,
  findByUserId,
  update,
  removeById,
  findByClientId,
} from '../controller/invoice.controller.js'

const invoiceRouter = Router()

invoiceRouter.post('/invoice', create)
invoiceRouter.get('/invoice', findAll)
invoiceRouter.get('/invoice/:id', findById)
invoiceRouter.get('/invoice/user/:userId', findByUserId)
invoiceRouter.put('/invoice/:id', update)
invoiceRouter.delete('/invoice/:id', removeById)
invoiceRouter.get('/invoices/client', findByClientId)
export default invoiceRouter
