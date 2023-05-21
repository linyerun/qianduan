// 1. function不可省略
function add(num1: number, num2: number): number {
  return num1 + num2
}

const sub = (num1: number, num2: number): number => {
  return num1 - num2
}

console.log(add(1,2))
console.log(sub(1,2))

// 2. 当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型。
// 这种形式只适用于函数表达式。
// 哪怕只有一个参数也不可省略括号
const mul: (num1: number, num2: number) => number = (num1, num2) => {
  return num1*num2
}
console.log(mul(1, 2));

// 3. 如果函数没有返回值，那么，函数返回值类型为：void。
function f(name: string): void {
  console.log('Hello,'+name)
}

f('随风的叶子')

// 4. 可选参数学习
// 可选参数后面不能存在必选参数了
function mySlice(start?: number, end?: number) {
  console.log('起始索引: ',start,'结束索引: ',end) //打印 undefined
}
mySlice()

function HaHa(str1: string, str2?: string):void {
  if (str2 === undefined) console.log(str1,',','world!')
  else console.log(str1,',',str2)
}
HaHa('Hi', '磐石')
HaHa('Hello')