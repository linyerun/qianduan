<template>
  <router-link to="/home">Home</router-link>
  <router-link to="/about">关于</router-link>
  <router-link to="/movie">电影</router-link>
  <button @click="$router.push({name: 'home'})">去主页</button>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
