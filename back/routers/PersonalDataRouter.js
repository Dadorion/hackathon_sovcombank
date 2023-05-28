import { Router } from "express"
import PersonController from "../controllers/PersonalDataController.js"

const personalDataRouter = new Router()

personalDataRouter.get('/', PersonController.getAll)
personalDataRouter.get('/:id', PersonController.getOne)
personalDataRouter.get('/', PersonController.create)
personalDataRouter.get('/', PersonController.update)

export default personalDataRouter
