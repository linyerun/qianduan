const db = require('./01-conn.js')

// 更新数据(有简化写法)
db.query('update user set name=?,age=? where id=?', ['随风的叶子', 20, 1], (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(res);
})