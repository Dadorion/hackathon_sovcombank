import UserService from '../serviceses/UserService.js'

class UserController {
   async create(req, res) {
      try {
         const newUser = await UserService.create(req.body)
         res.json(newUser.rows[0])

      } catch (e) {
         res.status(500).json(e)
         console.log(e)
      }
   }
   async getAll(req, res) {
      try {
         const allUsers = await UserService.getAll()
         allUsers
            ? res.status(200).json(allUsers)
            : res.status(204).json('This table is empty')
      } catch (e) {
         res.status(500).json(e)
      }
   }
   async getOne(req, res) {
      try {
         const { id } = req.params
         if (!id) { res.status(400).json({ message: 'We need ID namber.' }) }
         const user = await UserService.getOne(id)

         user
            ? res.status(200).json(user)
            : res.status(400).json('We have no such user')
      } catch (e) {
         res.status(500).json(e)
         console.log(e)
      }
   }
   async update(req, res) {
      try {
         const { id } = req.body
         if (!id) { res.status(400).json({ message: 'We need ID namber.' }) }

         const updetedUser = await UserService.update(req.body)

         res.status(200).json(updetedUser)
      } catch (e) {
         res.status(500).json(e.message)
      }
   }
   async delete(req, res) {
      try {
         const { id } = req.params
         if (!id) { res.status(400).json({ message: 'We need ID namber.' }) }

         const deletedUser = await UserService.delete(id)

         deletedUser
            ? res.status(200).json(deletedUser)
            : res.status(400).json('We have no such user')
      } catch (e) {
         res.status(500).json(e)
      }
   }
}

export default new UserController
