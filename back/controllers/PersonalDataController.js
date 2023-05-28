import PersonalDataService from '../serviceses/PersonalDataService.js'

class PersonalDataController {
   async create(req, res) {
      try {
         const newPerson = await PersonalDataService.create(req.body)
         res.json(newPerson.rows[0])

      } catch (e) {
         res.status(500).json(e)
         console.log(e)
      }
   }
   async getAll(req, res) {
      try {
         const allPersons = await PersonalDataService.getAll()
         allPersons
            ? res.status(200).json(allPersons)
            : res.status(204).json('This table is empty')
      } catch (e) {
         res.status(500).json(e)
      }
   }
   async getOne(req, res) {
      try {
         const { id } = req.params
         if (!id) { res.status(400).json({ message: 'We need ID namber.' }) }
         const person = await PersonalDataService.getOne(id)

         person
            ? res.status(200).json(person)
            : res.status(400).json('We have no such person')
      } catch (e) {
         res.status(500).json(e)
         console.log(e)
      }
   }
   async update(req, res) {
      try {
         const { id } = req.body
         if (!id) { res.status(400).json({ message: 'We need ID namber.' }) }

         const updetedPerson = await PersonalDataService.update(req.body)

         res.status(200).json(updetedPerson)
      } catch (e) {
         res.status(500).json(e.message)
      }
   }
}

export default new PersonalDataController
