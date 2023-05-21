<template>
  <div>{{obj}}</div>
  <button @click="obj.name += '1'">点击</button>
</template>

<script>
export default {
  name: "WatchTest02",
  data() {
    return {
      obj: {
        name: ''
      }
    }
  },
  watch: {
    obj: {
      handler: (newVal,oldVal) => {
        console.log(newVal, oldVal)
      },
      // deep: true
    },
    "obj.name": {
      handler: (newVal, oldVal) => {
        console.log(newVal, oldVal)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>