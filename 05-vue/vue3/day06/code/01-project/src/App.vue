<template>
<!--  <RefsTest01></RefsTest01>-->

<!--  <keep-alive>-->
<!--    <component :is="compName"></component>-->
<!--  </keep-alive>-->
<!--  <button @click="change">改变</button>-->

  <Article>
    <template #header>
      <p>春晓</p>
    </template>
    <template #default>
      <p>春眠不觉晓，处处问啼鸟。</p>
      <p>夜来风雨声，花落知多少。</p>
    </template>
    <template #footer>
      <p>作者：孟浩然</p>
    </template>
  </Article>

  <SendUser>
    <template #default="{scope}">
      {{scope}}
    </template>
  </SendUser>
  <SendUser>
    <template #default="{msg,user}">
      <ul>
        <li>{{msg}}</li>
        <li>{{user.name}}</li>
        <li>{{user.age}}</li>
      </ul>
    </template>
  </SendUser>

  <Test01></Test01>
  <div v-color="`red`">哈哈哈</div>
</template>

<script>
import Lyr from './components/component/Lyr.vue'
import Sui from './components/component/Sui.vue'
import Article from './components/slot/Article.vue'
import SendUser from './components/slot/SendUser.vue'
import Test01 from './directives/Test01.vue'
export default {
  name: 'App',
  components: {
    Lyr,Sui,Article,SendUser,Test01
  },
  data() {
    return {
      compName: 'Lyr',
      flag: true
    }
  },
  methods: {
    change() {
      if (this.flag) {
        this.compName = 'Sui'
      }else {
        this.compName = 'Lyr'
      }
      this.flag = !this.flag
    }
  }
}
</script>
