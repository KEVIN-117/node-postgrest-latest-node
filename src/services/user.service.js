import {
  deleteUser,
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
} from '../repositories/user.repositori.js'
export class UserService {
  async buildUser(user) {
    try {
      return await createUser(user)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a user')
    }
  }

  async getUsers() {
    try {
      return await getAllUsers()
    } catch (error) {
      console.error(error)
      throw new Error('Error while get all users')
    }
  }

  async getUserById(id) {
    try {
      return await getUserById(id)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a user')
    }
  }

  async updateUser(id, user) {
    try {
      return await updateUser(id, user)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a user')
    }
  }

  async removeUser(id) {
    try {
      return await deleteUser(id)
    } catch (error) {
      console.error(error)
      throw new Error('Error while creating a user')
    }
  }
}
