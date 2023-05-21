const userDao = require('../dao/user') //dao层
const bcrypt = require('bcryptjs') //加密算法

// 注册处理函数
exports.enroll = (req, resp) => {
    const userInfo = req.body
    // 已经加了校验信息的路由了
    // if(!userInfo.username || !userInfo.password) {
    //     return req.send({
    //         code: 301,
    //         msg: 'username and password can not be null!'
    //     })
    // }
    // 判断账号是否存在
    if (userDao.isUserExists(userInfo.username)) {
        resp.send({
            code: 302,
            msg: 'can not add this username to database!'
        })
    }
    // 对密码进行加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10) //10表示加盐长度
    // 添加用户
    if (!userDao.addUser(userInfo)) {
        resp.send({
            code: 500,
            msg: 'add user fail.'
        })
    }
    res.send({ code: 0, message: 'enroll successfully!' })
}

// 登录处理函数
exports.login = (req, resp) => {
    resp.send({
        code: 200,
        msg: 'login OK'
    })
}