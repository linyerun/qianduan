// 1. 导入express
const express = require('express')

// 2. 创建 web 服务器
const app = express()

// 3. 暴露接口
app.get('/user',(req,resp)=> {
    // 向客户发送JSON对象
    resp.send({name:"随风的叶子",age: 20, sex: "男"})
})

app.post('/user', (req, resp) => {
    // 向客户发送JSON对象
    resp.send({ msg: '请求成功', code: 200 })
})

app.post('/lyr',(req,resp)=>{
    // lyr?name='随风'&age=21
    console.log(req.query); //返回对象
    console.log(req.query.name);
    console.log(req.query.age);
    resp.send(req.query) //不加这个好像会一致没有结束请求
})
// 前面少加一条“/”都出事
app.get('/get/:id',(req,resp)=> {
    console.log(req.params); //获取动态路径对象
    console.log(req.params.id);
    resp.send(req.params)
})

// 加个静态资源处理器
app.use('/public',express.static('public'))

// 4.开启服务器
app.listen(9999,()=>{
    // 启动成功后调用回调函数
    console.log('express server running at http://localhost:9999')
})