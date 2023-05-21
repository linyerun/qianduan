import express from 'express'
import userRouter from './router/user.js'

const app = express()

app.use('/api',userRouter)

app.listen(9999, () => {
  console.log('server running at http://127.0.0.1:9999')
})