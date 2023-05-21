// 一行一个，无需分隔符了
interface IPerson {
  name: string
  age: number
  sayHi(name: string): void
  add?: (n1:number,n2:number) => number
}

interface A {name: string;age: number}

// 继承,抽取公共部分
interface Point2D {
  x: number
  y: number
}

// interface Point3D {
//   x: number
//   y: number
//   z: number
// }

interface Point3D extends Point2D {
  z : number
}