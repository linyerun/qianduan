<template>
  <div ref="d1" v-if="show">我被展示了</div>
  <button @click="change">按钮</button>
</template>

<script>
export default {
  name: "RefsTest01",
  data() {
    return {
      show: true,
      flag: false,
    }
  },
  methods: {
    change() {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(() => {
          if (this.flag) this.$refs.d1.style.color = 'red'
          else this.$refs.d1.style.color = 'blue'
          this.flag = !this.flag
        })
        // this.$refs.d1.style.color = 'red' //会出现报错, 因为d1还没被渲染上去
      }
    }
  }
}
</script>

<style lang="less" scoped>
div {
  width: 1000px;
  height: 100px;
  background-color: orange;
  margin: 0 auto;

  line-height: 100px;
  text-align: center;
}
button {
  position: fixed;
  left: 50%;
  top: 120px;
  transform: translate(-50%);

  display: block;

  height: 100px;
  width: 100px;

  line-height: 100px;
  text-align: center;
}
</style>