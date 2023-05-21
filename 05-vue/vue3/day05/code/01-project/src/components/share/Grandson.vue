<template>
  <div>孙子组件 - {{color}}</div>
</template>

<script>
export default {
  name: "Grandson",
  inject: ['color']
}
</script>

<style lang="less" scoped>

</style>