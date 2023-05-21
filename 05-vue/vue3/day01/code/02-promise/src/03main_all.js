import thenFs from 'then-fs'

const arrPromise = [
  thenFs.readFile('../assets/f1.txt', 'utf8'),
  thenFs.readFile('../assets/f2.txt', 'utf8'),
  thenFs.readFile('../assets/f3.txt', 'utf8'),
]
Promise.all(arrPromise)
    // 这个写法本质上就是快速获取数组值的写法
    .then(([r1,r2,r3]) => {
      console.log(r1,r2,r3)
    })
    // .then((res) => {
    //   console.log(res)
    // })
    .catch(err => {
      console.log(err.message)
    })