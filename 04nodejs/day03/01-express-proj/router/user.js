const express = require('express') //导入
const router = express.Router()//创建路由

router.get('/list',function(req,resp) {
    resp.send({msg: "Get user list.", code: 200})
})

router.post('/add',(req,resp)=>{
    resp.send({ msg: "post user msg.", code: 200 })
})

// 导出(必须加module,不然报错)(为什么呢?因为我们要改变exports的值)
module.exports = router