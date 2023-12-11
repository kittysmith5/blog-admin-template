<template>
  <router-link class="link" :to="path" active-class="active">
    <div class="sub-menu">
      <span class="menu-icon">{{ icon }}</span>
      <span>{{ title }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SubMenu",
  props: ["title", "path","icon"],
  methods: {
    handleSubMenuClick() {
    //   this.$router.push(this.path);
    },
  },
  mounted() {
    console.log(this.title);
  },
};
</script>

<style>
.link {
  color: inherit;
  text-decoration: none;
}

.active {
  background: rgb(236, 245, 255);
  color: rgb(64, 158, 255);
}

.sub-menu {
  height: 50px;
  line-height: 50px;
  /* text-align: left; */
padding-left: 20px;
  font-size: 1em;
  border-bottom: 1px solid #dcdfe6;
}

.menu-icon {
  font-size: 1.2em;
  margin-right: 5px;
}
</style>