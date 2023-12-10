<template>
  <div class="aside">
    <el-row class="tac">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <router-link to="/home/main">
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-notebook-2"></i>
              <span>博客管理</span>
            </template>
          </el-menu-item>
        </router-link>

        <router-link to="/home/test1">
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-notebook-1"></i>
              <span>TEST</span>
            </template>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Aside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.aside {
  width: 15%;
  height: calc(95vh);
  /* background-color: skyblue; */
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcdfe6;
}

.el-menu-item {
  border-bottom: 1px solid #e4e7ed;
}

a{
    text-decoration: none;
}
</style>