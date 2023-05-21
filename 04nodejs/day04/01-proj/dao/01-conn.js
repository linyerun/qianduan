const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'node_mysql'
})

module.exports = db

// 判断是否顺利连接上(导入的时候,这个会被执行)
db.query('select 1',(err,results)=>{
    if(err) return console.log(err.message);
    console.log(results);
})

