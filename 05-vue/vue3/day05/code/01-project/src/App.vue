<template>

<!--  <WatchTest01></WatchTest01>-->

<!--  <WatchTest02></WatchTest02>-->

  <!-- true表示显示,false表示隐藏 -->
<!--  <LifecycleTest01 v-if="show"></LifecycleTest01>-->
<!--  <button @click="show = !show">隐藏按钮</button>-->

<!--  <Dad01></Dad01>-->
<!--  <Dad02></Dad02>-->

  <VuexTest01></VuexTest01>
</template>

<script>
import WatchTest01 from './components/watch/WatchTest01.vue'
import WatchTest02 from './components/watch/WatchTest02.vue'
import LifecycleTest01 from './components/lifecycle/LifecycleTest01.vue'
import VuexTest01 from './components/vuex/VuexTest01.vue'
export default {
  name: 'App',
  components: {
    WatchTest01,
    WatchTest02,
    LifecycleTest01,
    VuexTest01
  },
  data() {
    return {
      show: true
    }
  }
}
</script>
