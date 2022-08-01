<template>
  <div class="home">
    子应用
    <router-link to="about">About</router-link>
    <button @click="back">返回主应用</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    back() {
      window.history.pushState(null, '', '#/about')

      // 主动触发一次popstate事件
      window.dispatchEvent(new PopStateEvent('popstate', { state: null }))
    }
  }
}
</script>
