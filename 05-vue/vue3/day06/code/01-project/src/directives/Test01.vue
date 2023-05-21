<template>
  <input v-focus>
</template>

<script>
export default {
  name: "Test01",
  directives: {
    //在 vue2 的项目中使用自定义指令时，【 mounted -> bind 】【 updated -> update 】
    focus: {
      // 只进行一次绑定,dom更新之后就不会被执行了
      mounted(el) {
        el.focus()
      },
      updated(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>