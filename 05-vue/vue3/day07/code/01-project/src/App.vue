<template>
  <div id="app">
    <div>
      <a href="#/Home">Home</a>
      <a href="#/About">About</a>
      <a href="#/Movie">Movie</a>
    </div>
    <component :is="compName"></component>
  </div>
</template>

<script>
import Home from "./components/simulate/Home.vue";
import About from "./components/simulate/About.vue";
import Movie from "./components/simulate/Movie.vue";
export default {
  name: 'App',
  components: {
    Home,About,Movie
  },
  created() {
    window.onhashchange = () => {
      console.log(location.hash)
      switch (location.hash) {
        case '#/home':
          this.compName = 'Home'
          break
        case '#/About':
          this.compName = 'About'
          break
        case '#/Movie':
          this.compName = 'Movie'
          break
      }
    }
  },
  data() {
    return {
      compName: 'Home'
    }
  }
}
</script>

<style scoped>
a {
  display: inline-block;
  text-decoration: none;
  height: 100px;
  width: 100px;
  margin: 10px 10px;
}
#app div {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
