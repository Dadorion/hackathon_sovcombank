import { Router } from "express"
import HRController from "../controllers/HRController.js"

const HRRouter = new Router()

HRRouter.get('/', HRController.getAll)

export default HRRouter
