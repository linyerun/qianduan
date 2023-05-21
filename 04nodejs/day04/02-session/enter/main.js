const express = require('express')
const expressSession = require('express-session')

const app = express()

app.use(express.urlencoded({extended: false}))

app.use(expressSession({
    secret: 'keyboard cat', //任意字符
    resave: false,          //固定写法
    saveUninitialized: true //固定写法
}))

// 登录
app.post('/api/login',(req,resp)=>{
    if(req.body.username!=='admin' || req.body.password !== '123456') {
        return resp.send({code: 301,msg: '登录失败'}) //这种return 加一句的写法没见过
    }
    req.session.user = req.body
    req.session.isLogin = true

    resp.send({code:200,msg:'登录成功'})
})

// 注销
app.post('/api/logout', (req, resp) => {
    // clear session
    req.session.destroy()
    resp.send({ code: 200, msg: '退出登录成功' })
})

// 查找
app.get('/api/username',(req,resp)=>{
    if(!req.session.isLogin) return resp.send({code:302,msg:'您还没有进行登录操作'})
    resp.send({
        code: 200,
        msg: '成功',
        username: req.session.user.username
    })
})

app.listen(9999,()=>{
    console.log('start running server port=9999');
})