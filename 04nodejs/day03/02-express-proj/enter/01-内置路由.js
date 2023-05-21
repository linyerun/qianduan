const express = require('express')
const app = express()

app.use(express.json())

// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
// TODO 这个有什么勾八用啊，笑死
app.use(express.urlencoded({extended: false}))

app.get('/get',(req,resp)=>{
    // console.log(req.body);
    resp.send(req.query)
})

app.post('/post', (req, resp) => {
    console.log(req.body);
    resp.send(req.body)
})

app.listen(9999,()=>{
    console.log('start running server!');
})