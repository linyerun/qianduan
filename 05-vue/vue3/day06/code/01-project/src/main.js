import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import RefsTest01 from './components/ref/RefsTest01.vue'

const app = createApp(App)

app.component(RefsTest01.name, RefsTest01)

app.directive('color', (el, color) => {
  el.style.color = color.value
})

app.mount('#app')