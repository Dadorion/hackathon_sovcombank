import pool from '../database.js'

class PersonalDataService {
   async getOne(id) {
      if (!id) { throw new Error('не указан ID') }

      const q = `SELECT * FROM personal_data WHERE id = $1 ORDER BY id DESC`
      const answer = await pool.query(q, [id])
      return answer.rows[0]
   }
   async getAll() {
      const q = `SELECT * FROM personal_data ORDER BY id DESC`
      const answer = await pool.query(q)
      return answer.rows
   }
}

export default new PersonalDataService()
