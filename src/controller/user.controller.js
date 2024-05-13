import { UserService } from '../services/user.service.js'

const userService = new UserService()

export async function createUser(req, res) {
  try {
    const user = req.body
    const newUser = await userService.buildUser(user)
    if (!newUser)
      return res.status(400).json({ message: 'Error while creating a user' })
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error while creating a user' })
  }
}

export async function findAllUsers(req, res) {
  try {
    const users = await userService.getUsers()
    if (!users) return res.status(404).json({ message: 'Users not found' })
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error while get all users' })
  }
}

export async function findUserById(req, res) {
  try {
    const { id } = req.params
    const user = await userService.getUserById(id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error while get user by id' })
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params
    const user = req.body
    const updatedUser = await userService.updateUser(id, user)
    if (!updatedUser)
      return res.status(400).json({ message: 'Error while updating user' })
    res.status(201).json({ message: 'User updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error while updating user' })
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params
    const deletedUser = await userService.removeUser(id)
    if (!deletedUser)
      return res.status(400).json({ message: 'Error while deleting user' })
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error while deleting user' })
  }
}
