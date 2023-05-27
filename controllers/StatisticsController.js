import HRBPService from '../serviceses/StatisticsService.js'

class HRBPController {
   async getAll(req, res) {
      try {

      } catch (e) {
         res.status(500).json(e)
      }
   }
}

export default new HRBPController
