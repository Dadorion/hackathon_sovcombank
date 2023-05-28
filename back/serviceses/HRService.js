import pool from '../database.js'

function dataBuilder(sourceArray) {
   const resultArray = sourceArray.reduce((acc, job) => {
      const requestNumIndex = acc.findIndex((item) => item.requestNum === job.requestnum);

      if (requestNumIndex === -1) {
         acc.push({
            requestNum: job.requestnum,
            jobs: [{
               position: job.position,
               city: job.city,
               description: job.description,
               count: job.count,
               keySkills: job.keyskills,
               responsibilities: [],
               requirements: []
            }]
         });
      } else {
         acc[requestNumIndex].jobs.push({
            position: job.position,
            city: job.city,
            description: job.description,
            count: job.count,
            keySkills: job.keyskills,
            responsibilities: [],
            requirements: []
         });
      }

      return acc;
   }, []);
   return resultArray
}

class HRService {
   async getAll() {
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

      return dataBuilder(requests.rows)
   }
}

export default new HRService()
