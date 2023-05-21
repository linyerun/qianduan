// 1. 类型兼容
class Point {
  x: number
  y: number
}

class Point2D {
  x: number
  y: number
}

const p: Point = new Point2D()

//2. 对于对象类型来说，y 的成员至少与 x 相同，则 x 兼容 y（成员多的可以赋值给少的）。
class Point3D {
  x: number
  y: number
  z: number
}

let pp: Point = new Point3D()


//3. 接口之间的兼容性，类似于 class。并且，class 和 interface 之间也可以兼容。
interface I1 {
  name: string
  show(): void
  say: (name: string) => number
}

interface I2 {
  name: string
  age: number
  show(): void
  say: (name: string) => number
}

let ii2: I2
let  ii1: I1 = ii2

const i2: I2 = {
  name: '哈哈',
  age: 21,
  show() {
  },
  say(name: string) {
    return 1
  }
}
const i1: I1 = i2


// 4. 函数之间兼容性
// 4.1 参数少的可以赋值给多的
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let f1: F1
let f2: F2 = f1

//这个例子也体现出来了
const arr = ['a', 'b', 'c', 'd']
arr.forEach(() => {})
arr.forEach((item) => {})

// 4.2 参数类型，相同位置的参数类型要相同（原始类型）或兼容（对象类型）
//原始类型要相同，上面那个例子就可以体现出来了
//兼容就是下面的例子了
class CF3 {
  name: string
}
type F3 = (cf3: CF3) => void
class CF4 {
  name: string
  age: number
}
type F4 = (cf4: CF4) => void

let f4: F4
let f3: F3 = f4 //兼容了

//4.3 返回值类型: 返回值类型是原始类型，此时两个类型要相同;果返回值类型是对象类型，此时成员多的可以赋值给成员少的
type F5 = () => {name: string}
type F6 = () => {name: string; age: number}
let f6:F6
let f5:F5
f5 = f6
// f6 = f5 //报错