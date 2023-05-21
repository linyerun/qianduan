import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home/index.vue') },
  { path: '/video/:id', component: () => import('@/views/Video/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes // 名字一致，可以直接省略前面的"routes: "
})

export default router
