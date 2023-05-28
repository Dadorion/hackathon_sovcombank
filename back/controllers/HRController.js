import HRService from '../serviceses/HRService.js'

class HRController {
   async getAll(req, res) {
      try {
         const allInfo = await HRService.getAll()

         allInfo
            ? res.status(200).json(allInfo)
            : res.status(500).json('Ошибка обработки данных')
      } catch (e) {
         res.status(500).json(e)
      }
   }
}

export default new HRController
