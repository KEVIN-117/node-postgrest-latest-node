import { Router } from 'express'
import {
  deleteUser,
  createUser,
  updateUser,
  findUserById,
  findAllUsers,
} from '../controller/user.controller.js'

const userRouter = Router()

userRouter.get('/user', findAllUsers)
userRouter.post('/user', createUser)
userRouter.get('/user/:id', findUserById)
userRouter.put('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)

export default userRouter
