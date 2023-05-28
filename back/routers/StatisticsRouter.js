import { Router } from "express"
import HRBPController from "../controllers/StatisticsController.js"

const hrbpRouter = new Router()

hrbpRouter.get('/', HRBPController.getAll)

export default hrbpRouter
