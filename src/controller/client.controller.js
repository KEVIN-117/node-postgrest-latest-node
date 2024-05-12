import { ClientService } from '../services/client.service.js'
import { v4 as uuid } from 'uuid'
const clientService = new ClientService()

export async function create(req, res) {
  try {
    const data = req.body

    const userData = {
      id: uuid(),
      ...data,
    }

    const client = await clientService.buildClient(userData)

    if (!client) return res.status(400).json({ message: 'Client not created' })
    return res.status(201).json(client)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params
    const data = req.body
    const client = await clientService.updateClient(id, data)
    if (!client) return res.status(400).json({ message: 'Client not updated' })
    return res.status(204).json({
      message: 'Client updated',
      date: new Date(),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function findAll(req, res) {
  try {
    const clients = await clientService.getAllClients()
    if (!clients) return res.status(400).json({ message: 'Clients not found' })
    return res.status(200).json(clients)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function findById(req, res) {
  try {
    const { id } = req.params
    const client = await clientService.getClientById(id)
    if (!client) return res.status(400).json({ message: 'Client not found' })
    return res.status(200).json(client)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function removeById(req, res) {
  try {
    const { id } = req.params
    const client = await clientService.removeClient(id)
    if (!client) return res.status(400).json({ message: 'Client not found' })
    return res.status(204).json({
      message: 'Client removed',
      date: new Date(),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
