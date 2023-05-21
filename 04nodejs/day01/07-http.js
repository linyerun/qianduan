const http = require('http')

const server = http.createServer()

server.on('request',(req,resp)=>{
    if (req.url === '/favicon.ico') return
    console.log(`welcome ${req.url} to here!`);
    console.log(`the ${req.url} method is ${req.method}`);
    resp.setHeader('Content-Type','text/html; charset=utf-8')
    resp.end(`<h1>${req.method} ${req.url}</h1>`)
})

server.listen('9999',()=>{
    console.log('start http server!');
})