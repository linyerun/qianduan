<template>
  <div :style="style">哈哈哈</div>
  <div :class="['a', 'b', 'c']">啦啦啦</div>
  <div :class="[flag ? 'a' : 'b']">啦啦啦</div>
  <div :class="cls">啦啦啦</div>
  <input v-model="inp" type="text">
  <div>{{inp}}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IStyle {
  color: string
  fontSize: string
}
interface IClass {
  a: boolean
  b: boolean
}
const style: IStyle = { color: 'red', fontSize: '50px' }
const flag: boolean = false
const cls:IClass = { a: true, b: true}
const inp = ref('xxx') //记住响应式的要使用这个ref
</script>

<style scoped>
.a {
  width: 100%;
  height: 200px;
  font-size: 100px;
}
.b {
  background-color: red;
}
.c {
  color: white;
}
</style>

