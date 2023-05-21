// 应用场景
let p = {name: '随风的叶子', age: 21}

// 繁写
function f1(person: {name: string, age: number}) {
  console.log(person)
}
f1(p)
//简写
function f2(person: typeof p) {
  console.log(person)
}
f2(p)

// 注意事项
console.log(typeof 1)
console.log(typeof p.name)
//无法查询其他形式的类型（比如，函数调用的类型）
console.log(typeof f1) //function