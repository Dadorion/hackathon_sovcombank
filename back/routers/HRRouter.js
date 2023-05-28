import { Router } from "express"
import HRController from "../controllers/HRController.js"

const HRRouter = new Router()

HRRouter.get('/', HRController.getRequestes)
// HRRouter.post('/candidates', HRController.getCandidates)

export default HRRouter
