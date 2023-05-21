<template>
  <h3>EmitsTest02组件,count = {{number}}</h3>
  <button @click="onBtnClick">+1</button>
</template>

<script>
export default {
  name: "EmitsTest01",
  props: {
    number: {
      default: 0,
      type: Number
    }
  },
  emits: ['update:number'],
  methods: {
    onBtnClick() {
      this.$emit('update:number', this.number + 1)
    }
  }
}
</script>

<style lang="less" scoped>

</style>