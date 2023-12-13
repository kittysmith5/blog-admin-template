<template>
  <div class="main-app">
    <MyTable></MyTable>
    <h1>Test1</h1>
  </div>
</template>

<script>
import MyTable from "./componets/MyTable.vue";
export default {
  name: "Main",
  components: {
    MyTable,
  },
};
</script>

<style lang="scss" scoped>
.main-app {
  width: 100%;
  min-height: 95vh;
}


</style>