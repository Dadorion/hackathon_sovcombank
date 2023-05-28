import pool from '../database.js'

class UserService {
   async getAll() {
      const q = `SELECT * FROM users ORDER BY id DESC`
      const answer = await pool.query(q)
      return answer.rows
   }
   async getOne(id) {
      const q = `SELECT * FROM users WHERE id = $1 ORDER BY id DESC`
      const answer = await pool.query(q, [id])
      return answer.rows
   }
}

export default new UserService()
