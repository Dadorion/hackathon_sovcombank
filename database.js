import pkg from 'pg'
const { Pool } = pkg

const config = {
   user: "postgres",
   password: "1111",
   host: "localhost",
   port: 5432,
   database: "recruitment",
}
const pool = new Pool(config)
export default pool

