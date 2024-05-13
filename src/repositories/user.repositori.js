import { DatabaseSingleton } from '../db/connector.js'

const sequelize = await DatabaseSingleton.getInstance()

export async function createUser(user) {
  try {
    const newUser = await sequelize.models.User.create(user)
    if (!newUser) return null
    return newUser
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a user')
  }
}

export async function getAllUsers() {
  try {
    const users = await sequelize.models.User.findAll()
    if (!users) return null
    return users
  } catch (error) {
    console.error(error)
    throw new Error('Error while get all users')
  }
}

export async function getUserById(id) {
  try {
    const user = await sequelize.models.User.findByPk(id)
    if (!user) return null
    return user
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a user')
  }
}

export async function updateUser(_id, user) {
  try {
    const user = await sequelize.models.User.update(user, {
      where: { id: _id },
    })
    if (!user) return null
    return user
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a user')
  }
}

export async function deleteUser(id) {
  try {
    const deletedUser = await sequelize.models.User.destroy({
      where: { id },
    })
    if (!deletedUser) return null
    return deletedUser
  } catch (error) {
    console.error(error)
    throw new Error('Error while creating a user')
  }
}
