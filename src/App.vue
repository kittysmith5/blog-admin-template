<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<!-- <script>
    export default {
        name: 'App'
    }
</script> -->

<style>
* {
  margin: 0;
  padding: 0;
}
body{
  height: 100vh;
}
[v-cloak] {
  display: none;
}
/* vue-markdown必须使用全局样式  */
img{
  max-width: 100%;
  height: auto;
}
</style>