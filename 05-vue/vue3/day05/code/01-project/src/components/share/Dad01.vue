<template>
  <Son :userInfo="userInfo" @emitCount="getCount" v-model:status="status"></Son>
  <button @click="userInfo.age++">年龄+1</button>
  <button @click="userInfo.name+='1'">姓名+1</button>
  <div>dad-son-status: {{status}}</div>
  <div>dad-dad-count: {{cnt}}</div>
  <button @click="color+='1'">颜色</button>
</template>

<script>
import eventBus from '../../js/eventBus/index.js'
import {computed} from "vue";

export default {
  name: "Dad01",
  data() {
    return {
      userInfo: {
        name: '磐石',
        age: 21,
        hobby: 'coding'
      },
      status: false,
      cnt: 0,
      color: 'red'
    }
  },
  methods: {
    getCount(val) {
      alert(val)
    }
  },
  created() {
    // 从自己被创建开始，监听changeCount这个事件
    eventBus.on('changeCount', (count) => {
      this.cnt = count
    })
  },
  provide() {
    return {
      // color: this.color, //这种不是响应式的，不能随着color值变化而变化
      color: computed(() => this.color), //这种不是响应式的，不能随着color值变化而变化
    }
  }
}
</script>

<style lang="less" scoped>

</style>