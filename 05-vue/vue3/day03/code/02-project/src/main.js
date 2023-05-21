import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import MyHeader from './components/MyHeader.vue'

const app = createApp(App)

app.component(MyHeader.name, MyHeader)

app.mount('#app')