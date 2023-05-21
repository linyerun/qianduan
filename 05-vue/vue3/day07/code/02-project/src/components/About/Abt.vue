<template>
  <div>{{$route.params.name}}</div>
  <div>{{name}}</div>
</template>

<script>
export default {
  name: "Abt",
  props: {
    name: {
      type: String,
      default: '111'
    }
  }
}
</script>

<style lang="less" scoped>

</style>