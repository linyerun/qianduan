const express = require('express')
const app = express()
const userRouter = require('./router/user.js')

// 路由模块
app.use('/user',userRouter)

app.listen(9999,() => {
    console.log('http server start running,port=9999');
})