const db = require('./01-conn.js')

// 只有一个参数可以不使用数组,但是多个参数一定要使用数组
db.query('delete from user where id = ?',6,(err,res)=>{
    if(err) {
        console.log(err);
    }
    console.log(res);
})