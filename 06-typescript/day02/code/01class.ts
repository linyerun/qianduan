//1. class，不仅提供了 class 的语法功能，也作为一种类型存在。
class Person1 {

}
const p1 = new Person1() //类型推断
let p2 = new Person1() //类型推断

//2. 实例属性初始化
class Person2 {
  age: number
  // name: string
  // name: string = '小林'
  name = '小林' //类型推断
}
console.log(new Person2()) //Person2 { name: '小林' }

//3. 构造函数
class Person3 {
  name = 'xx'
  age = 18
  // 需要为构造函数指定类型注解，否则会被隐式推断为 any
  // 构造函数不需要返回值类型。
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
console.log(new Person3('随风的叶子', 21)) //Person3 { name: '随风的叶子', age: 21 }

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

//7. 修饰符
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

let obj:{readonly name: string}
interface Interface {
  readonly name: string
}