// module.exports 和 exports 指向的是同一个对象,用户可以根据require获取
// 两个选一个来写, 别混着写

exports.username = 'LYR'

exports.getUsername = () => {
    // 当前这个方法是属于exports对象的,所以这个this指向这个对象
    return this.username
}