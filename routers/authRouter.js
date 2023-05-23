import { Router } from "express"
import AuthController from "../controllers/AuthController.js"
import { check } from "express-validator"

const routerAuth = new Router()

routerAuth.post('/registration', [
   check('login', "Имя пользователя не может быть пустым").notEmpty(),
   check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({ min: 4, max: 10 })
], AuthController.reg)
routerAuth.post('/login', AuthController.login)

export default routerAuth