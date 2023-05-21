const db = require('./01-conn.js')


// 查询user表中所有数据
db.query('select * from user', (err, res) => {
    if (err) return
    console.log(res);
})

// 插入数据(有简化写法)
db.query('insert into user(name,age) values (?,?)', ['哈哈', 25], (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    /*
        OkPacket {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 5,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
        }
    */
    console.log(res);
})