<template>
  <div>电影页</div>
  <router-link to="/movie/mov/1">1</router-link>
  <router-link to="/movie/mov/2">2</router-link>
  <router-link to="/movie/mov/3">3</router-link>
  <router-link :to="{name: 'mov', params: {id: 4}}">4</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Movie"
}
</script>

<style lang="less" scoped>

</style>