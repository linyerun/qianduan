let str1 = 'Hello ts'

const str2 = 'Hello ts' // 这个属于字面量类型, 把鼠标放过去就显示出来了

function f(direction: ('Left' | 'Right' | 'Top' | 'Down')) {
  if (direction === 'Left') {
    console.log('进行左移操作')
  }else if (direction === 'Right') {
    console.log('进行右移操作')
  }else if (direction === 'Top') {
    console.log('进行上移操作')
  }else if (direction === 'Down'){
    console.log('进行下移操作')
  }
}

let str = 'Left'

f('Left') //传str变量进去会报错