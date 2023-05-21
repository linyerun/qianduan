const path = require('path')

// dirname前面有两条下划线
console.log(path.join(__dirname,'./file/01.txt'));

console.log(path.join('a/','/b','c','02.html'));