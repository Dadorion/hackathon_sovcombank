import jwt from 'jsonwebtoken'
import config from './config.js'

const generateAccessToken = (id, roles) => {
   const payload = {
      id,
      roles
   }
   return jwt.sign(payload, config.secret, { expiresIn: "24h" })
}

export default generateAccessToken