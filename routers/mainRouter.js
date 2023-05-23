import { Router } from "express"
import userRouter from "./UserRouter.js"
import personalDataRouter from './PersonalDataRouter.js'
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = new Router()

router.use('/users', authMiddleware, userRouter)
router.use('/persons', authMiddleware, personalDataRouter)

export default router
