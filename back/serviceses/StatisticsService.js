import pool from '../database.js'

class HRBPService {
   async getAll() {
      const q = `SELECT * FROM users ORDER BY id DESC`
      const answer = await pool.query(q)
      return answer.rows
   }
}

export default new HRBPService()
