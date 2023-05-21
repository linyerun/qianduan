const fs = require('fs')

// 读入待整理数据
fs.readFile('./file/02-score.txt','utf8',function(err,str) {
    if(err) {
        console.log('文件读取失败');
        return
    }
    console.log('文件读取成功');
    // 整理数据
    let arr = str.split(' ')
    let data = []
    arr.forEach(item => {
        data.push(item.replace('=',': ')) //(old,new)
    })

    // 合并数据
    const joinData = data.join('\n')

    // 写入数据
    fs.writeFile('./file/03-score-ok.txt',joinData,'utf8',(err)=>{
        if(err) {
            console.log("文件写入失败!");
            return
        }
        console.log('文件写入成功!');
    })
})


