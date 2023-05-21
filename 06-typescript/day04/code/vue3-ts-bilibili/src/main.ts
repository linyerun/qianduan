import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

// vant组件
import { Tab, Tabs, Swipe, SwipeItem } from 'vant'

// mock(模拟假请求)
import '@/mock/index'

const app = createApp(App)

// 注册全局组件
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)

app.use(router)
app.mount('#app')
