import UserService from '../serviceses/UserService.js'

class UserController {
   async getAll(req, res) {
      try {
         const allUsers = await UserService.getAll()
         allUsers
            ? res.status(200).json(allUsers)
            : res.status(204).json('Нет пользователей')
      } catch (e) {
         res.status(500).json(e)
      }
   }
   async getOne(req, res) {
      try {
         const { id } = req.params
         if (!id) { res.status(400).json({ message: 'Не укзан ID пользователя' }) }
         const user = await UserService.getOne(id)

         user
            ? res.status(200).json(user)
            : res.status(400).json('Нет такого пользователя')
      } catch (e) {
         res.status(500).json(e)
         console.log(e)
      }
   }
}

export default new UserController
