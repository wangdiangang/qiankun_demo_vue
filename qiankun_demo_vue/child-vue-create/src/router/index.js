import Vue from 'vue'
import VueRouter from 'vue-router'
import Homes from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homes',
    component: Homes,
    meta: { title: "注册" },
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: "注册" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__?'/vue-create':process.env.BASE_URL,
  routes
})

export default router
