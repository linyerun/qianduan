const express = require('express')
const app = express()
const qs = require('querystring') //内置的 querystring 模块

app.use((req,resp,next)=>{
    let str = ''
    req.on('data',(chunk)=>{
        str += chunk
    })
    req.on('end',()=>{
        const body = qs.parse(str)
        req.body = body
        next() //这个时候才结束这个函数
    })
})

app.post('/user', (req, res) => {
    res.send(req.body) //x-www-form-urlencoded模拟
})

app.listen(9999, function () {
    console.log('Express server running at http://127.0.0.1:9999')
})