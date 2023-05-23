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
