const fs = require('fs')

// 第三个参数可选,默认是utf8(把之前的内容覆盖了)
fs.writeFile('./file/01.txt','笑死了\n',function(err) {
    if(err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功!');
})