const express = require('express')
const jwt = require('jsonwebtoken')
const secretKey = 'suifeng-0429-node-2001'
const expressJWT = require('express-jwt') //注意版本,版本太高,用法不一样
const cors = require('cors')

const app = express()

app.use(cors()) //允许跨域
app.use(express.json()) //解析json
// unless，指定哪些接口不需要权限
// 前面要加上“Bearer ”,放在header的Authorization
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))

// 登录接口
app.post('/api/login',(req,resp)=>{
    console.log(req.body);
    resp.send({
        code: 200,
        msg: '登录成功',
        token: jwt.sign(
            {username: req.body.username,password: req.body.password},
            secretKey,
            {expiresIn: '3600s'}
        )
    })
})

// 有权限接口
app.get('/admin/getInfo',(req,resp)=>{
    console.log(req.user);
    resp.send({
        code: 200,
        msg: '获取用户信息成功',
        data: req.user
    })
})

// 错误捕获
app.use((err,req,resp,next)=>{
    if(err.name === 'UnauthorizedError') {
        return resp.send({
            code: 401,
            msg: '无效token'
        })
    }
    res.send({
        code: 500,
        msg: '未知错误'
    })
})

app.listen(9999,()=>{
    console.log('start running successfully!');
})