import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RootApp from '../views/root-app.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: window.__MICRO_APP_BASE_ROUTE__ || '/',
    component: RootApp,
    children: [
      // 其他的路由都写到这里
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ],
  },
]

const router = new VueRouter({
  base: window.__MICRO_APP_BASE_ROUTE__ || '/',
  routes
})

export default router
