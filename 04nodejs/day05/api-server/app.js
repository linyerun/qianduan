// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 设置跨域路由
const cors = require('cors')
app.use(cors())

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件(req.body)
app.use(express.urlencoded({ extended: false }))

// 注册用户路由
const userRouter = require('./router/user')
app.use('/api',userRouter)

// write your code here...


const joi = require('@hapi/joi')    //用户信息校验包
// 错误中间件
app.use(function (err, req, resp, next) {
    resp.send({
        code: 400,
        msg: err instanceof Error ? err.message : err
    })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})