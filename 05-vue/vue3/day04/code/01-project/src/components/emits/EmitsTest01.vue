<template>
  <h3>EmitsTest01组件,count = {{count}}</h3>
  <button @click="onBtnClick">+1</button>
</template>

<script>
export default {
  name: "EmitsTest01",
  emits: ['change'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onBtnClick() {
      this.$emit('change', ++this.count)
    }
  }
}
</script>

<style lang="less" scoped>

</style>