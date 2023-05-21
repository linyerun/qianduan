<template>
  <div>{{`count的值: ${count}`}}</div>
  <div>{{`count*2值: ${plus}`}}</div>
  <button @click="count++">+1</button>
</template>

<script>
export default {
  name: "ComputedTest01",
  data() {
    return {
      count: 0
    }
  },
  computed: {
    plus() {
      return this.count*2
    }
  }
}
</script>

<style lang="less" scoped>

</style>