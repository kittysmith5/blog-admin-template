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
  props: ["title", "path", "icon"],
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

<style lang="scss" scoped>
$activeBgColor: rgb(236, 245, 255);
$activeTextColor: rgb(64, 158, 255);
$subMenuBorderColor: #dcdfe6;
$menuFontSize:1.2em;


.link {
  color: inherit;
  text-decoration: none;
}

.active {
  background: $activeBgColor;
  color: $activeTextColor;
}

.sub-menu {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 1em;
  border-bottom: 1px solid $subMenuBorderColor;
}

.menu-icon {
  font-size: $menuFontSize;
  margin-right: 5px;
}
</style>