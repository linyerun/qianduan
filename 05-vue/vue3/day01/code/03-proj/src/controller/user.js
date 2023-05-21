import db from '../db/mysql.js'

// 获取所有用户信息
export async function getAllUsers(req,resp) {
  try {
    const [rows] = await db.query('select id, username, nickname from ev_users')
    resp.send({
      code: 200,
      msg: '成功',
      data: rows
    })
  }catch (err) {
    resp.send({code: 500, msg: err.message})
  }
}