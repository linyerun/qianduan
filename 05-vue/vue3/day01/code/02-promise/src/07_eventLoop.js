import thenFs from "then-fs";

console.log('A') //首先被执行
thenFs.readFile('../assets/f1.txt', 'utf8')
    .then(r1 => {
      console.log('B') // 4
    })

setTimeout(() => {
  console.log('C') // 3
}, 0)

console.log('D') // 2