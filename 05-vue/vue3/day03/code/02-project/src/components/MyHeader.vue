<template>
  <div :style="styleObj" class="box">{{title}}</div>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    title: {
      type: String
    },
    bgColor: {
      type: String
    },
    color: {
      type: String
    },
  },
  data() {
    return {
      styleObj: {
        backgroundColor: this.bgColor,
        color: this.color,
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  width: 1000px;
  height: 100px;

  text-align: center;
  line-height: 100px;
}
</style>