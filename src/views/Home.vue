<template>
  <div class="home">
    <Header />
    <div class="bottom">
      <Aside />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Aside from "./componets/Aside.vue";
import Header from "./componets/Header.vue";
export default {
  name: "Home",
  components: {
    Aside,
    Header,
  },
};
</script>

<style scoped>
.bottom{
    display: flex;
}
</style>