const express = require('express')
const app = express()
const apiRouter = require('./router/api.js')

/*
    中间件分类:
        1.应用级别中间件:
            1. 全局中间件
            2. 局部中间件
        2.路由级别中间件
        3.错误级别中间件
            必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。
            注意：错误级别的中间件，必须注册在所有路由之后！
        4.express内置中间件
            1.express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）
            2.express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
            3.express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
        5.第三方的中间件
*/

app.use((req,resp,next)=>{
    console.log('全局中间件1');
    next() //一定要写
})

app.use((req,resp,next)=>{
    console.log('全局中间件2');
    next()
})

app.use('/api',apiRouter)

const mw1 = (req,resp,next) => {
    console.log('局部中间件1');
    next()
}

const mw2 = (req,resp,next) => {
    console.log('局部中间件2');
    next()
}

// 可以注册任意多个
app.get('/get',mw1,mw2,(req,resp) => {
    resp.send({method: req.method,url:req.url})
})

app.get('/err',(req,resp)=>{
    throw new Error('服务器内部错误!')
    // resp.send({code:500,msg:'错误'})//写了也没有用
})

app.use((err,req,resp,next)=>{
    console.log(`${req.url} err = ${err.message}`);
    resp.send({err:err,code:500})
    next()
})

app.listen(9999,()=>{
    console.log('start running server,port = 9999');
})