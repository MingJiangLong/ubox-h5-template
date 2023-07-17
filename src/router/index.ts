import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home, meta: { title: 'Home页' } },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  window.document.title = `${to.meta.title ?? ''}`
  next()
})

export default router
