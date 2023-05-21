const express = require('express')

const app = express()

// 托管public一个静态资源
app.use(express.static('public'))

// 如果要托管多个静态资源目录，请多次调用 express.static() 函数
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。

// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：
app.use('/public',express.static('files'))

app.listen(9999,function(){
    console.log('http://127.0.0.1:9999 server start running!');
})