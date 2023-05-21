<template>
  <div ref="d">哈哈哈</div>
  <div v-if="flag">啦啦啦</div>
  <button @click="change">按钮</button>
</template>

<script>
export default {
  name: "LifecycleTest01",
  data() {
    return {
      flag: false
    }
  },
  methods: {
    change() {
      if (this.flag) {
        this.$refs.d.style.color = 'red'
      }else {
        this.$refs.d.style.color = 'blue'
      }
      this.flag = !this.flag
    }
  },
  beforeCreate() {
    console.log("元素创建之前")
  },
  // 最常用
  created() {
    console.log("元素被创建了")
  },
  beforeMount() {
    console.log('元素渲染之前')
  },
  mounted() {
    console.log("元素被渲染了")
  },
  beforeUpdate() {
    console.log("元素被更新之前")
  },
  updated() {
    console.log("元素被更新了")
  },
  beforeUnmount() {
    console.log("元素被销毁之前")
  },
  unmounted() {
    console.log("元素被销毁了")
  }
}
</script>

<style lang="less" scoped>

</style>