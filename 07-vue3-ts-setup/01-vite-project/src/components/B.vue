<template>
  <div>{{lyr}}</div>
  <div ref="dom">{{panShi}}</div>
  <div @click="printDom">打印</div>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
// ref详细看教程
import { ref, isRef, Ref } from 'vue'

interface IPerson {
  name: string
}

const lyr = ref( {name: '随风的叶子'} )

// [T] extends [Ref] ? T : Ref<UnwrapRef<T>>
const panShi: Ref<IPerson> = ref({ name: '磐石' })

const change = () => {
  console.log(isRef(lyr)) // isRef判断变量是不是ref对象
  lyr.value.name = '坚如磐石'
}

const dom = ref<HTMLDivElement>() //和上面元素进行绑定
const printDom = () => {
  console.log(dom.value)
}
</script>

<style scoped>
</style>
