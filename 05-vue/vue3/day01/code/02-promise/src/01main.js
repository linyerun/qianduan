import thenFs from 'then-fs'

// 这样写catch可以保证在没有遇到错误之前会一直正确执行，捕获到错误之后就不执行了
thenFs.readFile('../assets/f1.txt', 'utf8')
    .then(r1 => {
      console.log(r1)
      return thenFs.readFile('../assets/f2.txt', 'utf8')
    })
    .then(r2 => {
      console.log(r2)
      return thenFs.readFile('../assets/f3.txt', 'utf8')
    })
    .then(r3 => {
      console.log(r3)
    })
    .catch(err => {
      console.log(err.message)
    })