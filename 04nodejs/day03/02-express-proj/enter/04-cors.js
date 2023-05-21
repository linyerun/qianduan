const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/get', (req, res) => {
    res.send(req.method+' '+req.url)
})

app.listen(9999, function () {
    console.log('Express server running at http://127.0.0.1:9999')
})