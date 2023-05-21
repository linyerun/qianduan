<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
// 使用ref函数定义模板中使用到的响应式数据，相当于Vue2的data
import { ref } from 'vue'
import axios from 'axios'

interface INavItem {
  id: string
  text: string
}

const active = ref(0) // active 表示当前选中标签的下标为0
const list = ref<INavItem[]>([])

axios({
  url: '/navList',
  method: 'get'
}).then(res => { // ts规定死了,我必须得这样
  list.value = res.data.result
})

</script>
