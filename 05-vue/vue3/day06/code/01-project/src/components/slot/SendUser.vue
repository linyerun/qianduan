<template>
  <slot msg="Hello,Slot!" :user="userInfo"></slot>
</template>

<script>
export default {
  name: "SendUser",
  data() {
    return {
      userInfo: {
        name: '随风',
        age: 21
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>