<template>
  <div>count-dad2 = {{count}}</div>
  <button @click="add">dad2-add</button>
</template>

<script>
import eventBus from '../../js/eventBus/index.js'
export default {
  name: "Dad02",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      eventBus.emit('changeCount', ++this.count)
    }
  }
}
</script>

<style lang="less" scoped>

</style>