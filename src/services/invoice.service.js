import { createInvoice, deleteInvoice, getAllInvoices, updateInvoice, getInvoicesByUserId, getInvoiceById, getInvoicesClient } from '../repositories/invoice.repositori.js'

export class InvoiceService {
    async createInvoice(invoice) {
        return await createInvoice(invoice)
    }

    async getAllInvoices() {
        return await getAllInvoices()
    }

    async getInvoiceById(id) {
        return await getInvoiceById(id)
    }

    async updateInvoice(id, invoice) {
        return await updateInvoice(id, invoice)
    }

    async deleteInvoice(id) {
        return await deleteInvoice(id)
    }

    async getInvoicesByUserId(userId) {
        return await getInvoicesByUserId(userId)
    }

    async getInvoicesClient() {
        return await getInvoicesClient()
    }
}
