import { Router } from "express"
import userRouter from "./UserRouter.js"
import personalDataRouter from './PersonalDataRouter.js'

const router = new Router()

router.use('/users', userRouter)
router.use('/persons', personalDataRouter)

export default router
