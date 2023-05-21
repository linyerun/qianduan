import thenFs from 'then-fs'

console.log('A')
async function readFiles() {
  console.log('B')
  // 使用await修饰，返回的Promise对象，最后给到变量的是resolve返回的结果
  const r1 = await thenFs.readFile('../assets/f1.txt', 'utf8')
  const r2 = await thenFs.readFile('../assets/f2.txt', 'utf8')
  const r3 = await thenFs.readFile('../assets/f3.txt', 'utf8')
  console.log(r1,r2,r3) // 等上面三个执行完了再执行这个打印和下面的打印
  console.log('C')
}

readFiles()
console.log('D')