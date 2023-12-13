<template>
</template>

<script>
import blogApi from "@/api/blogApi.js";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "MyTable",
  props: ["blog", "index"],
  data() {
    return {
      isDeleted: false,
    };
  },
  components: {
    "my-button": MyButton,

  },
  methods: {
    seeMDText(uuid) {
      blogApi
        .fetchMDTextByUUID(uuid)
        .then((res) => {})
        .catch((err) => {});
    },
    handleDel(uuid) {
      // console.log("del", uuid);
      blogApi
        .delBlogByUUID(uuid)
        .then((res) => {
          console.log(res);
          alert("删除成功");
          // this.blog = {}
          this.isDeleted = true;
        })
        .catch((err) => {
          console.log(err);
          alert("删除失败");
        });
    },
  },
};
</script>

<style lang="scss">
td {
  border: 1.5px solid #dddddd;
  text-align: left;
  padding: 8px;
  max-width: 100px;
  width: auto;
}
</style>