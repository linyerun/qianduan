<template>
<!--  <ComputedTest01></ComputedTest01>-->
<!--  <FruitList></FruitList>-->
<!--  <EmitsTest01 @change="getMsg"></EmitsTest01>-->
  <EmitsTest02 v-model:number="count"></EmitsTest02>
</template>

<script>
import ComputedTest01 from './components/computed/ComputedTest01.vue'
import FruitList from './components/computed/FruitList.vue'
import EmitsTest01 from './components/emits/EmitsTest01.vue'
import EmitsTest02 from './components/emits/EmitsTest02.vue'
export default {
  name: 'App',
  components: {
    ComputedTest01,
    FruitList,
    EmitsTest01,
    EmitsTest02
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    getMsg(val) {
      console.log(`被触发了,count=${val}`)
    }
  }
}
</script>
