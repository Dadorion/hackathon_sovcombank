import { Router } from "express"
import userRouter from "./UserRouter.js"
import personalDataRouter from './PersonalDataRouter.js'
import statisticsRouter from './StatisticsRouter.js'
import hrRouter from './HRRouter.js'
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = new Router()

router.use('/users', authMiddleware, userRouter)
router.use('/persons', authMiddleware, personalDataRouter)
router.use('/hr', authMiddleware, hrRouter)
router.use('/statistics', authMiddleware, statisticsRouter)

export default router
