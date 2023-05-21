import thenFs from 'then-fs'

const arrPromise = [
  thenFs.readFile('../assets/f1.txt', 'utf8'),
  thenFs.readFile('../assets/f2.txt', 'utf8'),
  thenFs.readFile('../assets/f3.txt', 'utf8'),
]

Promise.race(arrPromise)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.message)
    })