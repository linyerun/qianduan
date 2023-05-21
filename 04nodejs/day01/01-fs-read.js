const fs = require('fs')

// 第二个参数可选
fs.readFile('./file/01.txt','utf8',function(err,dataStr) {
    // console.log(err);
    // console.log('----------');
    // console.log(dataStr);
    if(err) {
        console.log("文件读取失败!");
        return
    }
    console.log(dataStr);
})

fs.readFile('./file/01.txt', function (err, dataStr) {
    // console.log(err);
    // console.log('----------');
    // console.log(dataStr);
    if (err) {
        console.log("文件读取失败!");
        return
    }
    console.log(dataStr);
})