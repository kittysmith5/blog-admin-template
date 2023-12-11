<template>
  <div class="aside">
    <SubMenu title="博客管理" icon="📖" path="/home/main" />
    <SubMenu title="测试项目" icon="💉" path="/home/test1" />
  </div>
</template>

<script>
import SubMenu from "@/views/componets/SubMenu.vue";
export default {
  name: "Aside",
  components: {
    SubMenu,
  },
};
</script>

<style scoped>
.aside {
  width: 15%;
  height: calc(95vh);
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcdfe6;
}
</style>