<!-- my-page.vue -->
<template>
  <div>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <micro-app name='my-page' url='http://localhost:3000/' baseroute='/my-page'  :data='microAppData'></micro-app>
  </div>
</template>


<script>
export default {
  data () {
    return {
      microAppData: {
        pushState: (path) => {
          this.$router.push(path)
        }
      }
    }
  },
}
</script>