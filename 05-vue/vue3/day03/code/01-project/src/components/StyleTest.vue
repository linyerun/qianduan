<template>
  <div :style="styleObject">磐石-随风-叶润</div>
  <button @click="changeColor">换颜色</button>
</template>

<script>
export default {
  name: "StyleTest",
  data() {
    return {
      styleObject: {}
    }
  },
  methods: {
    changeColor() {
      this.styleObject.color = 'skyblue'
    }
  }
}
</script>

<style lang="less" scoped>

</style>