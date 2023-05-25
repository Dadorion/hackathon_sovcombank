import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
import routerAPI from './routers/mainRouter.js'
import routerAuth from './routers/authRouter.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get('/', (req, res) => { res.json('Welcome to Server') })
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
