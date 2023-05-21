import thenFs from 'then-fs'

thenFs.readFile('../assets/f1.txt','utf8')
    .catch(err => {
      console.log(err.message)
    })
    .then(r1 => {
      console.log(r1)
      return thenFs.readFile('../assets/f2.txt','utf8')
    })
    .then(r2 => {
      console.log(r2)
      return thenFs.readFile('../assets/f3.txt','utf8')
    })
    .then(r3 => {
      console.log(r3)
    })

// thenFs.readFile('../assets/f11.txt','utf8')
//     .catch(err => {
//       console.log(err.message)
//     })
//     .then(r1 => {
//       console.log(r1)
//       return thenFs.readFile('../assets/f22.txt','utf8')
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
//     .then(r2 => {
//       console.log(r2)
//       return thenFs.readFile('../assets/f3.txt','utf8')
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
//     .then(r3 => {
//       console.log(r3)
//     })