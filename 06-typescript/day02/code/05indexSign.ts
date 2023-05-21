// 隐藏的前置知识：JS 中对象（{}）的键是 string 类型的
interface AnyObject {
  [key: string]: number
}
let ao: AnyObject = {a: 1,b: 2,}
type AO = {[key: string]: number}
let h: AO = ao

interface MySlice {
  [idx: number]: number
}
let mySlice: MySlice = [1, 2, 3, 4]