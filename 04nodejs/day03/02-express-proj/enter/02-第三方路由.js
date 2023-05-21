const express = require('express')
const app = express()
const pb = require('body-parser')

// 注册路由
app.use(pb.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body) //x-www-form-urlencoded模拟
    res.send(req.body)
})

app.listen(9999, function () {
    console.log('Express server running at http://127.0.0.1:9999')
})
