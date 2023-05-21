// 创建泛型函数
function id<Type>(value: Type): Type {
  return value
}
// function id<Type>(value: Type) { //利用类型推断
//   return value
// }
// 当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数。
id<number>(10)
id(10)  //让ts自己判断(类型参数推断的机制)
id<string>('111')
id('111')


function f<Type1,Typ2>(v1: Type1, v2: Typ2) {
}

// 类型约束
function f0<type>(ts: type[]) {
  console.log(ts.length)
  return ts
}
interface ILen {
  length: number
}
function f1<type extends ILen>(t: type) {
  console.log(t.length)
  return t
}
f1([1,2,3]) //数组有length属性，所以可以传进去

//这个约束可以
function f2<Map,Key extends keyof Map>(obj: Map, key: Key) {
  return obj[key]
}
f2({name: '随风'}, 'name')
// f2({name: '随风'}, 'age') //报错, 因为没有这个key


//创建泛型接口
interface Interface<Type> {
  val: Type
  show: (Type) => Type
}
let a = ['1','2','3'] //string[]类型
// a.forEach() //，JS 中的数组在 TS 中就是一个泛型接口。

//创建泛型类
class Class<Type1,Type2> {
  t1: Type1
  t2: Type2
  show(Type1): Type2 {
    return this.t2
  }
}
let cls = new Class<string, number>()

// Partial<Type> 用来构造（创建）一个类型，将 Type 的所有属性设置为可选。
class Sui {
  name: string
  age: number
}
type PartialSui = Partial<Sui>
let ps1: PartialSui = {}
let ps2: PartialSui = { name: '随风'}
interface Feng {
  name: string
  age: number
}
type PartialFeng = Partial<Feng>
let pf: PartialFeng = {}

// Readonly
class L {
  name: string
}
interface Y {
  name: string
  show: () => number
}
type ReadonlyL = Readonly<L>
type ReadonlyY = Readonly<Y>
// new L().name = 100 //报错

// pick
class LLL {
  name: string
  age: number
  sex: number
}

type PickLLL = Pick<LLL, 'name'|'sex'>

// record
type RecordObj = Record<'a'|'b', number>
let o: RecordObj = {a: 1,b: 2}