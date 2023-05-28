import HRService from '../serviceses/HRService.js'

class HRController {
   async getRequestes(req, res) {
      try {
         const allInfo = await HRService.getRequestes()

         allInfo
            ? res.status(200).json(allInfo)
            : res.status(500).json('Ошибка обработки данных')
      } catch (e) {
         res.status(500).json(e)
      }
   }

   async getCandidates(req, res) {
      try {
         const allInfo = await HRService.getCandidates()

         allInfo
            ? res.status(200).json(allInfo)
            : res.status(500).json('Ошибка обработки данных')
      } catch (e) {
         res.status(500).json(e)
      }
   }
}

export default new HRController
