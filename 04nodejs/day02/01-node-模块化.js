/*
    node模块化:
        的内置模块、用户自定义模块、第三方模块
    模块作用域:
        在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问
        好处: 防止了全局变量污染的问题
    向外共享模块作用域中的成员:
        在每个 .js 自定义模块中都有一个 module 对象，
        它里面存储了和当前模块有关的信息
    向外共享模块作用域中的成员:
        module.exports 对象
            将模块内的成员共享出去，供外界使用。
            外界使用require('路径名')获取并使用
            使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。         
*/

// console.log(module);

const me = require('./me/01') //后面的js可以省略
const hh = require('./me/02')

// 验证了我的一个想法, 这个对象是放在堆里面的, 我们在别的模块改变它, 就相当于直接改变它的内容了
console.log(me.username);
me.username = '111'
console.log(me.getUsername());
console.log(hh.getMeName());