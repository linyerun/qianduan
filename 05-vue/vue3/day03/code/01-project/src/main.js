import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Movie from './components/Movie.vue'
import ClassTest from './components/ClassTest.vue'
import StyleTest from './components/StyleTest.vue'

const app = createApp(App)

// 注册全局组件
app.component(Movie.name, Movie)
app.component(ClassTest.name, ClassTest)
app.component(StyleTest.name, StyleTest)

app.mount('#app')
