import {
  deleteClient,
  createClient,
  findAllClients,
  findClientById,
  updateClient,
} from '../repositories/client.repositori.js'

export class ClientService {
  async buildClient(client) {
    try {
      return await createClient(client)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a client')
    }
  }

  async getAllClients() {
    try {
      return await findAllClients()
    } catch (error) {
      console.error(error)
      throw new Error('Error while get all clients')
    }
  }

  async getClientById(id) {
    try {
      return await findClientById(id)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a client')
    }
  }

  async updateClient(id, client) {
    try {
      return await updateClient(id, client)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a client')
    }
  }

  async removeClient(id) {
    try {
      return await deleteClient(id)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a client')
    }
  }
}
