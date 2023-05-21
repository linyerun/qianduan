<template>
  <div>主页</div>
  <router-link to="/home/tab1">tab1</router-link>
  <router-link to="/home/tab2">tab2</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Home",
  methods: {
    go() {

    }
  }
}
</script>

<style lang="less" scoped>

</style>