import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Son from './components/share/Son.vue'
import Dad01 from './components/share/Dad01.vue'
import Dad02 from './components/share/Dad02.vue'
import Grandson from './components/share/Grandson.vue'
import axios from 'axios'
import store from "./js/vuex/store.js";

const app = createApp(App)

app.component(Son.name, Son)
app.component(Dad01.name, Dad01)
app.component(Dad02.name, Dad02)
app.component(Grandson.name, Grandson)

// 挂载axios
axios.defaults.baseURL = 'https://api.com'
app.config.globalProperties.$http = axios //组件可以通过 this.$http获取这个对象

app.use(store)
// app.config.globalProperties.$store = store

app.mount('#app')