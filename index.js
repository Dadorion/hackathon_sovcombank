import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import mainRouterAPI from './routers/mainRouter.js'
import authRouter from './routers/authRouter.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors({
   origin: ['http://localhost:5173']
}))

app.get('/', cors(), (req, res) => { res.json('Welcome to Server') })
app.use('/auth', authRouter)
app.use('/api', mainRouterAPI)

async function startApp() {
   try {
      app.listen(PORT, () => {
         console.log('SERVER WORKS ON PORT ' + PORT)
      })
   }
   catch (e) { console.log(e) }
}

startApp()
