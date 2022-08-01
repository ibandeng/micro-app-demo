<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    主应用
    <router-link to="/my-page/">点击跳转到子应用</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
