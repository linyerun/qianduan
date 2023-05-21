
async function waitSec(sec) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('等待结束')
    }, sec * 1000)
  })
}

waitSec(3).then(r => {
  console.log(r)
})