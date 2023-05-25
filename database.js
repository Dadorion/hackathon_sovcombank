import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import pkg from 'pg'
const { Pool } = pkg

const config = {
   user: process.env.DB_USER || "postgres",
   password: process.env.DB_PASS || "1111",
   host: process.env.DB_HOST || "localhost",
   port: process.env.DB_PORT || 5432,
   database: process.env.DB_NAME || "recruitment",
}
const pool = new Pool(config)
export default pool
