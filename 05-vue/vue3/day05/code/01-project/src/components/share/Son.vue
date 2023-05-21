<template>
  <ul>
    <li v-for="(v,k) in userInfo">
      {{`${k}=${v}`}}
    </li>
  </ul>
  <div>{{`count=${count}`}}</div>
  <button @click="add">son-count+1</button>
  <button @click="changeStatus">改变状态</button>
  <Grandson></Grandson>
</template>

<script>
export default {
  name: "Son",
  components: {},

  props: {
    userInfo: {
      type: Object,
      default: {},
      require: true
    },
    status: {
      type: Boolean,
      default: false,
      require: true
    }
  },
  emits: ['emitCount', 'update:status'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
      this.$emit('emitCount', this.count)
    },
    changeStatus() {
      this.$emit('update:status', !this.status)
    }
  }
}
</script>

<style lang="less" scoped>

</style>