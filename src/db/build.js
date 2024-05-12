import { Client, clientSchema } from '../models/client.model.js'
import { Invoice, invoiceSchema } from '../models/invoice.model.js'
export function setUpModel(sequelize) {
  Client.init(clientSchema, Client.config(sequelize))
  Invoice.init(invoiceSchema, Invoice.config(sequelize))
}
