import { InvoiceService } from '../services/invoice.service.js'
import { v4 as uuid } from 'uuid'

const invoiceService = new InvoiceService()

export async function create(req, res) {
  try {
    const data = req.body
    const invoiceData = {
      id: uuid(),
      ...data,
    }
    const invoice = await invoiceService.createInvoice(invoiceData)
    if (!invoice)
      return res.status(400).json({ message: 'Invoice not created' })
    return res.status(201).json(invoice)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params
    const data = req.body
    const invoice = await invoiceService.updateInvoice(id, data)
    if (!invoice)
      return res.status(400).json({ message: 'Invoice not updated' })
    return res.status(204).json({
      message: 'Invoice updated',
      date: new Date(),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function findAll(req, res) {
  try {
    const invoices = await invoiceService.getAllInvoices()
    if (!invoices)
      return res.status(400).json({ message: 'Invoices not found' })
    return res.status(200).json(invoices)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function findById(req, res) {
  try {
    const { id } = req.params
    const invoice = await invoiceService.getInvoiceById(id)
    if (!invoice) return res.status(400).json({ message: 'Invoice not found' })
    return res.status(200).json(invoice)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function removeById(req, res) {
  try {
    const { id } = req.params
    const invoice = await invoiceService.deleteInvoice(id)
    if (!invoice)
      return res.status(400).json({ message: 'Invoice not deleted' })
    return res.status(204).json({
      message: 'Invoice deleted',
      date: new Date(),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function findByUserId(req, res) {
  try {
    const { userId } = req.params
    const invoices = await invoiceService.getInvoicesByUserId(userId)
    if (!invoices)
      return res.status(400).json({ message: 'Invoices not found' })
    return res.status(200).json(invoices)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function findByClientId(req, res) {
  try {
    const invoices = await invoiceService.getInvoicesClient()
    if (!invoices)
      return res.status(400).json({ message: 'Invoices not found' })
    return res.status(200).json(invoices)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
