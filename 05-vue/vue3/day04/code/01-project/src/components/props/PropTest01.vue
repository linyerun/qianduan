<template>

</template>

<script>
export default {
  name: "PropTest01",
  props: {
    title: String,
    many: [String, Number],
    color: {
      type: String,
      require: true,
      default: 'red'
    },
    msg: {
      // msg的值
      validator(value) {
        // 表示value是数组中的一个值
        return ['success', 'warn', 'error'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>