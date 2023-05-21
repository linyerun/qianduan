interface IPersonDad {
  name: string
}

interface IPersonSon extends IPersonDad {
  age: number
}

function f(): IPersonDad {
  return {
    name: '随风的叶子'
  }
}

const p = f() as IPersonSon