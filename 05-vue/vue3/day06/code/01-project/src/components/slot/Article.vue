<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style lang="less" scoped>

</style>