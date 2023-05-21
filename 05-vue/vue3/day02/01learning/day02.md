**day02是吧ppt中关于vue2的内容都加进去了，有些没写过例子的就写一下**
# 过滤器
- 可以传参数
- 有全局和局部
- 使用: `|`
## 局部过滤器
```js
export default {
  name: 'App',
  filters: {
    add (str, arg0, arg1) {
      return str + arg0 + `,` + arg1
    }
  }
}
```
## 全局过滤器
```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册全局过滤器
Vue.filter('capitalize', str => {
  return str.charAt(0).toUpperCase() + str.slice(1) + '~~'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
```

