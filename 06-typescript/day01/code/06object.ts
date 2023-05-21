let person: {name: string; age: number; sayHi: (string) => void; sayHello?(): void}

person = {
  name: '随风的叶子',
  age: 21,
  sayHi: (name: string) => {
    console.log('Hello,'+name)
  }
}

// sayHi可选
function sayHi(person: {name: string; sayHi?: (string) => void}) {
  if (person.sayHi === undefined) console.log('Hello,', person.name)
  else person.sayHi(person.name)
}

// 传进来的对象只有包含对象里面的东西就可以了
sayHi(person)