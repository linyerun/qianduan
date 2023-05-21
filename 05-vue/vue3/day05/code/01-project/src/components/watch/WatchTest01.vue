<template>
  username: <input @keyup.enter="username = $refs.inp.value" ref="inp">
</template>

<script>
import axios from 'axios'
export default {
  name: "WatchTest01",
  data() {
    return {
      username: '111'
    }
  },
  watch: {
    username: {
      handler: async (newVal, oldVal) => {
        console.log(`oldVal: ${oldVal}`)
        const {data: res} = await axios.get(`https://www.escook.cn/api/finduser/${newVal}`)
        console.log(res)
      },
      immediate: true //表示组件初始化完成立即执行
    }
  }
}
</script>

<style lang="less" scoped>

</style>