type PropKeys = 'x' | 'y' | 'z'
type Type1 = {[Key in PropKeys]: number} //等价于{x: number, y: number, z: number}

// 映射类型除了根据联合类型创建新类型外，还可以根据对象类型来创建
class Cls1 {
  name: string
  age: number
}
type Type2 = {[key in keyof Cls1]: number}

// 前面讲到的泛型工具类型（比如，Partial<Type>）都是基于映射类型实现的。
type PartialMe<T> = {
  [p in keyof T]?: T[p] // key: 类型
}
type Props = {a: number; b: number; C: number, d: string}
type PartialProps = PartialMe<Props>

type ReadonlyMe<T> = {
  readonly [p in keyof T]: T[p]
}
type LYR = ReadonlyMe<Props>

// 索引查询（访问）类型。
type Num = Props['a'] //只能在type使用
type qwq = Props['a'|'d'] // type qwq = number | string
type qeq = Props[keyof Props] // type qeq = number | string
// const s = Props['a']