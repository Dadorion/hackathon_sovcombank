import pool from '../database.js'
import requestsBuilder from '../dataBuilders/requestsBuilder.js'

class HRService {
   async getRequestes() {
      const requests = await pool.query(
         `
         SELECT 
            positions.id as positionID, 
            requests.number as requestNum, 
            positions.name as position, 
            description, 
            count, 
            cities.name as city,
            skills.name as keySkills
         FROM requests
            JOIN requests_positions ON requests.id = request_id
            JOIN positions ON positions.id = position_id
            JOIN cities ON cities.id = city_id      
            JOIN positions_skills ON positions.id = positions_skills.position_id
            JOIN skills ON skills.id = positions_skills.skill_id
         ORDER BY positionID DESC
         `)

      const stages = await pool.query(`SELECT * FROM stages ORDER BY id ASC`)

      return requestsBuilder(requests.rows)
   }

   async getCandidates(payload) {
      const candidates = await pool.query(
         `
         SELECT value as role, first_name, mid_name, last_name, birstday, cities.name as city, phone, email
         FROM users
         JOIN auth_roles ON auth_role_id = auth_roles.id
         JOIN personal_data ON personal_data.user_id = users.id
         LEFT JOIN cities ON personal_data.city_id = cities.id
         WHERE auth_role_id = $1
         `, [1])


      return candidates.rows
   }
}

export default new HRService()
