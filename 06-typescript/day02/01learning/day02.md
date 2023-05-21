**TypeScript 高级类型**
# class 类
## 小入门
```ts
//1. class，不仅提供了 class 的语法功能，也作为一种类型存在。
class Person {

}
const p1 = new Person() //类型推断
let p2 = new Person() //类型推断
```
## 属性初始化
```ts
//2. 实例属性初始化
class Person2 {
  age: number
  // name: string
  // name: string = '小林'
  name = '小林' //类型推断
}
console.log(new Person2()) //Person2 { name: '小林' }
```
## 构造函数
```ts
//4. 实例方法
class Person4 {
  name: string
  age: number

  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }

  setName(name: string) {
    this.name = name
  }
  setAge(age: number) {
    this.age = age
  }

  SayHi(): string {
    if (this.name === undefined) return 'Hi,XXX'
    return 'Hi,'+this.name
  }
}

const p = new Person4()
p.setAge(21)
p.setName('随风')
console.log(p.SayHi())
```
## extends & implements
- 类继承的两种方式：
  - 1 extends（继承父类） 
  - 2 implements（实现接口）
### extends
- 子类 Dog 继承父类 Animal，则 Dog 的实例对象 dog 就同时具有了父类 Animal 和 子类 Dog 的所有属性和方法。
```ts
//5. extends 一次只能继承一个类，不支持继承多个类
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move() {
    console.log(this.name+' Moving along!')
  }
}

class Dog extends Animal{
  constructor(name: string) {
    super(name);
  }
  bark() {
    console.log('汪汪汪!')
  }
}

let d = new Dog('小黄狗')

d.move()
d.bark()
```

### implements
```ts
//6. implements 可以实现多个接口
interface SingAble {
  name: string
  sing(): void
}

interface JumpAble {
  name: string
  jump(): void
}

class Person5 implements SingAble, JumpAble{
  name: string  //不加这个会报错
  constructor(name: string) { //不能使用多个构造函数
    this.name = name
  }
  jump(): void {
    console.log(this.name + '能跳')
  }

  sing(): void {
    console.log(this.name + '能唱')
  }
}

let p5 = new Person5('哈哈哈')
p5.sing()
p5.jump()
console.log(p5)
```

## 类成员可见性
- public：表示公有的、公开的，公有成员可以被任何地方访问，**默认可见性(就是不加就是public)**。
- protected：表示受保护的，仅对其声明所在类和子类中（非实例对象）可见。
  - 在**类属性或方法**前面添加 protected 关键字，来修饰该属性或方法是受保护的。
  - 子类的方法内部可以通过 this 来访问父类中受保护的成员，但是，对实例不可见！
  - private：表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的。
    - 在类属性或方法前面添加 private 关键字，来修饰该属性或方法是私有的。
    - 私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的！
- readonly：表示只读，用来防止在构造函数之外对属性进行赋值。
  - 只能修饰属性不能修饰方法
  - 接口或者 {} 表示的对象类型，也可以使用 readonly。(没懂)
    -  `let obj:{readonly name: string}`
    - `interface Interface {
      readonly name: string
      }`
```ts
//7. 修饰
class Animal1 {
  public name1: string
  protected name2: string
  private name3: string
  readonly name4: string
  constructor(name4: string) {
    this.name4 = name4
  }
  show() {
    //报错
    // this.name4 = '111'

    console.log(this.name1)
    this.name1 = '2222'
    console.log(this.name2)
    this.name2 = '1111'
    console.log(this.name3)
    this.name3 = '3333'
    console.log(this.name4)
  }
}

class Cat extends Animal1{
  constructor(name4: string) {
    super(name4);
  }
  show() {
    console.log(this.name1)
    this.name1 = '2222'
    console.log(this.name2)
    this.name2 = '1111'
    //3获取不了
    console.log(this.name4)
    // this.name4 = '111'(报错)
  }
}

let aml1 = new Animal1('哈哈哈')
console.log(aml1.name1);
// console.log(aml1.name2); //报错
// console.log(aml1.name3); //报错
console.log(aml1.name4);

let cat = new Cat('啦啦啦')
console.log(cat.name1)
// console.log(cat.name2) //报错
// console.log(cat.name3) //报错
console.log(cat.name4)
```

# 类型兼容性
- TS 采用的是结构化类型系统，也叫做 duck typing（鸭子类型），类型检查关注的是值所具有的形状
  - 也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。
  - 对于对象类型来说，成员多的可以赋值给少的
  - 接口之间的兼容性，类似于 class。并且，class 和 interface 之间也可以兼容。
  - 函数之间兼容性
    - 参数少的可以赋值给多的
    - 参数类型，相同位置的参数类型要相同（原始类型）或兼容（对象类型）
    - 返回值类型: 返回值类型是原始类型，此时两个类型要相同;果返回值类型是对象类型，此时成员多的可以赋值给成员少的
```ts
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
```
```ts
//2. 对于对象类型来说，y 的成员至少与 x 相同，则 x 兼容 y（成员多的可以赋值给少的）。
class Point3D {
  x: number
  y: number
  z: number
}

let pp: Point = new Point3D()
```
```ts
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
```
```ts
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
```

# 交叉类型
- 交叉类型（&）：功能类似于接口继承（extends），用于组合多个类型为一个类型
  - 使用交叉类型后，新的类型 PersonDetail 就同时具备了 Person 和 Contact 的所有属性类型。
  - 交叉类型（&）和接口继承（extends）的对比
    - 相同点：都可以实现对象类型的组合。
    - 不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同。
**开胃菜**
```ts
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
```
**不同点演示**
```ts
// 不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同。
interface Lyr {
  sayHi: (string) => string
}
interface Sui {
  sayHi: (number) => number
}
// 交叉类型可以兼容
type LyrSui = Lyr & Sui
let ls: LyrSui

//兼容不了这两个相同方法，当然不同名就没事了
// interface XXX extends Lyr,Sui{
//
// }

interface LLL {
  sayHi: (string) => string
}
interface YYY {
  sayHi: (number) => string
}
type LY = LLL & YYY
const ly: LY = {
  sayHi(s: string|number) {
    return '111'
  }
}
```

# 泛型
- 泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class 中。
```ts
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
```
**泛型约束**
```ts
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
```
```ts
//这个约束可以
function f2<Map,Key extends keyof Map>(obj: Map, key: Key) {
  return obj[key]
}
f2({name: '随风'}, 'name')
// f2({name: '随风'}, 'age') //报错, 因为没有这个key
```
**泛型接口**
```ts
//创建泛型接口
interface Interface<Type> {
  val: Type
  show: (Type) => Type
}
```
`// a.forEach() //，JS 中的数组在 TS 中就是一个泛型接口。`
**泛型类**
```ts
//创建泛型类
class Class<Type1,Type2> {
  t1: Type1
  t2: Type2
  show(Type1): Type2 {
    return this.t2
  }
}
let cls = new Class<string, number>()
```
**泛型工具类型**
- Partial
  - Partial<Type> 用来构造（创建）一个类型，将 Type 的所有属性设置为可选。
```ts
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
```
- Readonly
  - 用来构造一个类型，将 Type 的所有属性都设置为 readonly（只读）。
```ts
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
```
- Pick
  - 从 Type 中选择一组属性来构造新类型。
```ts
// pick
class LLL {
  name: string
  age: number
  sex: number
}

type PickLLL = Pick<LLL, 'name'|'sex'>
```
- Record
  - 构造一个对象类型，属性键为 Keys，属性类型为 Type。
```ts
// record
type RecordObj = Record<'a'|'b', number>
let o: RecordObj = {a: 1,b: 2}
```



# 索引签名类型
- 使用 [key: string] 来约束该接口中允许出现的属性名称。表示只要是 string 类型的属性名称，都可以出现在对象中。
- 这样，对象 obj 中就可以出现任意多个属性（比如，a、b 等）
- key 只是一个占位符，可以换成任意合法的变量名称。
- 隐藏的前置知识：JS 中对象（{}）的键是 string 类型的。
```ts
// 隐藏的前置知识：JS 中对象（{}）的键是 string 类型的
interface AnyObject {
  [key: string]: number
}
let ao: AnyObject = {a: 1,b: 2,}
type AO = {[key: string]: number}
let h: AO = ao
```
-  JS 中数组是一类特殊的对象，特殊在数组的键（索引）是数值类型。
- 数组也可以出现任意多个元素。所以，在数组对应的泛型接口中，也用到了索引签名类型
```ts
interface MySlice {
  [idx: number]: number
}
let mySlice: MySlice = [1, 2, 3, 4]
```
- MySlice 接口模拟原生的数组接口，并使用 [idx: number] 来作为索引签名类型。
- 该索引签名类型表示：只要是 number 类型的键（索引）都可以出现在数组中，或者说数组中可以有任意多个元素。
- 同时也符合数组索引是 number 类型这一前提。



# 映射类型
- 映射类型只能在类型别名中使用，不能在接口中使用。
```ts
type PropKeys = 'x' | 'y' | 'z'
type Type1 = {[Key in PropKeys]: number} //等价于{x: number, y: number, z: number}
```
- 首先，先执行 keyof Props 获取到对象类型 Props 中所有键的联合类型即，'a' | 'b' | 'c'。
- 然后，Key in ... 就表示 Key 可以是 Props 中所有的键名称中的任意一个。
```ts
// 映射类型除了根据联合类型创建新类型外，还可以根据对象类型来创建
class Cls1 {
  name: string
  age: number
}
type Type2 = {[key in keyof Cls1]: number}
```
```ts
// 前面讲到的泛型工具类型（比如，Partial<Type>）都是基于映射类型实现的。
type PartialMe<T> = {
  [p in keyof T]?: T[p] // key: 类型
}
type Props = {a: number; b: number; C: number}
type PartialProps = PartialMe<Props>

type ReadonlyMe<T> = {
  readonly [p in keyof T]: T[p]
}
type LYR = ReadonlyMe<Props>
```
**索引查询类型**
```ts
// 索引查询（访问）类型。
type Num = Props['a'] //只能在type使用
type qwq = Props['a'|'d'] // type qwq = number | string
type qeq = Props[keyof Props] // type qeq = number | string
// const s = Props['a']
```

