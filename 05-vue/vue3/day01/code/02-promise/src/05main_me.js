import fs from 'fs'

function getFileContent(path) {
  return new Promise((resolve,reject) => {
    fs.readFile(path, 'utf8', (err,data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

getFileContent('../assets/f1.txt')
    .then(r1 => {
      console.log(r1)
      return getFileContent('../assets/f2.txt')
    })
    .then(r2 => {
      console.log(r2)
      return getFileContent('../assets/f3.txt')
    })
    .then(r3 => {
      console.log(r3)
    })