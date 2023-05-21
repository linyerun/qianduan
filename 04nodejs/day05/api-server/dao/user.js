const db = require('../db/index')

exports.isUserExists = (username) => {
    db.query('select id from ev_users where username = ?',username,(err,res)=>{
        if(err || res.length>0) {
            console.log(err);
            return true
        }
        return false
    })
}

exports.addUser = (userInfo) => {
    const sql = 'insert into ev_users(username,password) values(?,?)'
    db.query(sql,[userInfo.username,userInfo.password],(err,res)=>{
        if (err || res.affectedRows !== 1) {
            console.log(err);
            return false
        }
        return true
    })
}