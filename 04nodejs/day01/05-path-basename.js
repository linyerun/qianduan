const path = require('path')

// 第二个参数可选

const p1 = path.basename('/a/b/c.html') //c.html
const p2 = path.basename('/a/b/c.html','.html') //c

console.log(p1);
console.log(p2);