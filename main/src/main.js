import Vue from 'vue'
import App from './App.vue'
import router from './router'

// index.js
import microApp from '@micro-zoe/micro-app'

microApp.start({
  preFetchApps: [
    { name: 'my-app', url: 'http://localhost:3000/' }
  ],
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
