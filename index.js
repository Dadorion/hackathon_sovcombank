import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import routerAPI from './routers/mainRouter.js'
import routerAuth from './routers/authRouter.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors({
   origin: ['http://localhost:5173']
}))

app.get('/', cors(), (req, res) => { res.json('Welcome to Server') })
app.use('/auth', routerAuth)
app.use('/api', routerAPI)

async function startApp() {
   try {
      app.listen(PORT, () => {
         console.log('SERVER WORKS ON PORT ' + PORT)
      })
   }
   catch (e) { console.log(e) }
}

startApp()
