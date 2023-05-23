import pool from '../database.js'

class AuthService {
   async getUser(login) {
      const q = `SELECT * FROM users WHERE login = $1`
      const answer = await pool.query(q, [login])
      return answer.rows[0]
   }
   async addUser(login, password) {
      const q = `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`
      const answer = await pool.query(q, [login, password])
      return answer.rows
   }
}

export default new AuthService()
