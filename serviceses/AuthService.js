import pool from '../database.js'

class AuthService {
   async getUser(login) {
      const q = `SELECT * FROM users WHERE login = $1 ORDER BY id DESC`
      const answer = await pool.query(q, [login])
      console.log(answer.rows)
      return answer.rows
   }
   async addUser(login, password) {
      const q = `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`
      const answer = await pool.query(q, [login, password])
      return answer.rows
   }
}

export default new AuthService()
