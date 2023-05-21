let arr01: number[] = [1, 2, 3] //推荐写法

let arr02: string[] = ['1', '2', '3']

let arr03: Array<string> = ['1', '22', '333']

//解释：| (竖线)在 TS 中叫做联合类型
// 由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种
let arr04: (number | string)[] = ['1', 1, '22', 22, '333', 333]
