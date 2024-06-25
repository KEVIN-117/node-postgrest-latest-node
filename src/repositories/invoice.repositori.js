import { DatabaseSingleton } from '../db/connector.js'
import pg from 'pg'
import { getEnv } from '../../config/configurations.js'

const sequelize = await DatabaseSingleton.getInstance()

export async function createInvoice(invoice) {
  try {
    const newInvoice = await sequelize.models.Invoice.create(invoice)
    if (!newInvoice) return null
    return newInvoice
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a invoice')
  }
}

export async function getAllInvoices() {
  try {
    const invoices = await sequelize.models.Invoice.findAll()
    if (!invoices) return null
    return invoices
  } catch (error) {
    console.error(error)
    throw new Error('Error while get all invoices')
  }
}

export async function getInvoiceById(id) {
  try {
    const invoice = await sequelize.models.Invoice.findByPk(id)
    if (!invoice) return null
    return invoice
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a invoice')
  }
}

export async function updateInvoice(_id, invoice) {
  try {
    const invoice = await sequelize.models.Invoice.update(invoice, {
      where: { id: _id },
    })
    if (!invoice) return null
    return invoice
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a invoice')
  }
}

export async function deleteInvoice(id) {
  try {
    const deletedInvoice = await sequelize.models.Invoice.destroy({
      where: { id },
    })
    if (!deletedInvoice) return null
    return deletedInvoice
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a invoice')
  }
}

export async function getInvoicesByUserId(userId) {
  try {
    const invoices = await sequelize.models.Invoice.findAll({
      where: { userId },
    })
    if (!invoices) return null
    return invoices
  } catch (error) {
    console.error(error)
    throw new Error('Error while get all invoices')
  }
}

export async function getInvoicesClient() {
  const { dbPort, dbUser, port, dbPassword, dbName, dbHost } = getEnv()
  const { Client } = pg

  const client = new Client({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: dbPort,
  })

  try {
    await client.connect()
    const query = `SELECT * FROM invoice JOIN client ON invoice.client_id = client.id`
    const data = await client.query(query)
    return data.rows
  } catch (error) {
    console.error(error)
    throw new Error('Error while get all invoices')
  }
}
