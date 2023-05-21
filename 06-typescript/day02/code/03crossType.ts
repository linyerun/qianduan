class AAA {
  name: string
}

class BBB {
  age: number
}

type CCC = AAA & BBB

class Class {
  name: string
  age: number
}
const c: CCC = new Class()

interface I1 {
  name: string
}

interface I2 {
  age: number
}

type III = I1 & I2

type DDD = {name: string} & {age: number}

const d: DDD = {name: '111', age: 21}

// 不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同。
interface Lyr {
  sayHi: (string) => string
}
interface Sui {
  sayHi: (number) => number
}
// 交叉类型可以兼容
type LyrSui = Lyr & Sui


//兼容不了这两个相同方法，当然不同名就没事了
// interface XXX extends Lyr,Sui{
//
// }
// TODO 不写名字，直接写类型，默认类型为名，名的类型为any
interface LLL {
  sayHi: (s:string) => string
}
interface YYY {
  sayHi: (n:number) => string
}
type LY = LLL & YYY
const ly: LY = {
  sayHi(s: string|number) {
    return '111'
  }
}

interface Interface {
  say: (string) => string
}
