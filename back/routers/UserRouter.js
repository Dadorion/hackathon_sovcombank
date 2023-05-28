import { Router } from "express"
import UserController from "../controllers/UserController.js"

const userRouter = new Router()

userRouter.get('/', UserController.getAll)
userRouter.get('/:id', UserController.getOne)
userRouter.get('/', UserController.create)
userRouter.get('/', UserController.update)
userRouter.get('/:id', UserController.delete)

export default userRouter
