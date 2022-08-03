import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyPage from './my-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/my-page/*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'my-page',
    component: MyPage,
  },
]

const router = new VueRouter({
  // mode:"history",
  routes
})

// router.onError((error) => {
//   const pattern = /Loading chunk .* failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if (isChunkLoadFailed) {
//     router.replace(targetPath);
//   }
// });

export default router
