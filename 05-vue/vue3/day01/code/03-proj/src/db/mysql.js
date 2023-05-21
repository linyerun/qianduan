import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'node_mysql',
  user: 'root',
  password: '123456',
})

export default pool.promise()