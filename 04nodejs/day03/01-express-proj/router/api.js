const express = require('express')

const router = express.Router()

module.exports = router

router.use((req,resp,next)=>{
    console.log('路由级别中间件1');
    next()
})

router.use((req, resp, next) => {
    console.log('路由级别中间件2');
    next()
})

router.get('/:name',(req,resp)=>{
    resp.send({name: req.params.name})
})