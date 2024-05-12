import { DatabaseSingleton } from '../db/connector.js'

const sequelize = await DatabaseSingleton.getInstance()

export async function createClient(client) {
  try {
    const newClient = await sequelize.models.Client.create(client)
    if (!newClient) return null
    return newClient
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a client')
  }
}

export async function findAllClients() {
  try {
    const clients = await sequelize.models.Client.findAll()
    if (!clients) return null
    return clients
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a client')
  }
}

export async function findClientById(id) {
  try {
    const client = await sequelize.models.Client.findByPk(id)
    if (!client) return null
    return client
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a client')
  }
}

export async function updateClient(_id, client) {
  try {
    const updatedClient = await sequelize.models.Client.update(client, {
      where: { id: _id },
    })
    if (!updatedClient) return null
    return updatedClient
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a client')
  }
}

export async function deleteClient(id) {
  try {
    const deletedClient = await sequelize.models.Client.destroy({
      where: { id },
    })
    if (!deletedClient) return null
    return deletedClient
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a client')
  }
}
