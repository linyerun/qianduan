<template>
  <!-- 单个的 -->
  <div :class=" isOk ? 'green' : 'red' ">字体颜色变化</div>
  <button @click="isOk = !isOk">点击</button>
  <!-- 多个的 -->
  <div :class="[isOk ? 'green' : 'red',changeSize ? 'big' : 'small']">字体颜色和大小</div>
  <button @click="changeSize = !changeSize">点击</button>
</template>

<script>
export default {
  name: "ClassTest",
  data() {
    return {
      isOk: true,
      changeSize: true
    }
  }
}
</script>

<style lang="less" scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.big {
  font-size: large;
}
.small {
  font-size: small;
}
</style>