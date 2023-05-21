import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Movie from '../components/Movie.vue'
import Tab01 from "../components/Home/Tab01.vue";
import Tab02 from "../components/Home/Tab02.vue";
import Mov from "../components/Movie/Mov.vue";
import Abt from "../components/About/Abt.vue";

// vue-router子路由规则不要加'/'开头

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'lyr',
  routes: [
    {path: '/', redirect: '/home', name: 'home'},
    {
      path: '/home', component: Home,
      children: [
        {path: 'tab1', component: Tab01},
        {path: 'tab2', component: Tab02}
      ]
    },
    {
      path: '/about', component: About,
      children: [
        {path: 'abt/:name', component: Abt, props: true}
      ]
    },
    {
      path: '/movie', component: Movie,
      children: [
        {path: "mov/:id", component: Mov, name: 'mov'}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // next(false) 停留在当前页面
  // next('路径') 强制跳转到该页面
  // if (to.path !== '/login') {
  //   let token = localStorage.getItem('token');
  //   if (token !== '111.222.333') next('/login')
  //   next('/home')
  // }
  console.log(to,from)
  next() //放行
})

export default router