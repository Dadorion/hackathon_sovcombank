import AuthService from '../serviceses/AuthService.js'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'

class AuthController {
   async reg(req, res) {
      try {
         const errors = validationResult(req)
         if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Ошибка при регистрации", errors })
         }

         const { login, password } = req.body;
         const candidate = await AuthService.getUser(login)

         if (candidate[0]) {
            return res.status(400).json({ message: "Пользователь с таким именем уже существует" })
         }
         const salt = 7
         const hashPassword = bcrypt.hashSync(password, salt)
         const user = await AuthService.addUser(login, hashPassword)
         return res.json({ message: `Пользователь ${login} успешно зарегистрирован` })
      } catch (e) {
         console.log(e)
      }
   }
   async login(req, res) {
      try {
         const { login, password } = req.body;

         const user = await AuthService.getUser(login)
         console.log(user)
         if (!user) {
            return res.status(400).json({ message: `Пользователь ${login} не найден` })
         }

         const validPassword = bcrypt.compareSync(password, user.password)
         if (!validPassword) {
            return res.status(400).json({ message: `Введен неверный пароль` })
         }

      } catch (e) {
         console.log(e)
      }
   }
   async getUsers(req, res) {
      try {
         res.json('Everything fine')
      } catch (e) {
         console.log(e)
      }
   }
}

export default new AuthController
