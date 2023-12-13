<template>
  <!-- <div> -->
  <tr v-show="!isDeleted">
    <td>{{ index }}</td>
    <td>{{ blog.uuid }}</td>
    <td>{{ blog.title }}</td>
    <td>{{ blog.date }}</td>
    <td>
      <my-button type="success" @click="seeMDText">查 看</my-button>
    </td>
    <td>
      <my-button type="primary">编 辑</my-button>
      <div style="margin: 5px; display: inline-block"></div>
      <my-button type="danger" @click="handleDel(blog.uuid)">删 除</my-button>
    </td>
  </tr>
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
    seeMDText() {
      console.log("seeMDText");
      this.$bus.$emit("getMDTextByUUID", this.blog.title,this.blog.uuid);
      console.log("after seeMDText");
    },
    handleDel(uuid) {
      // console.log("del", uuid);
      blogApi
        .delBlogByUUID(uuid)
        .then((res) => {
          console.log(res);
          alert("删除成功");
          // this.blog = {}
          this.isDeleled = true;
        })
        .catch((err) => {
          console.log(err);
          alert("删除失败");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  border: 1.5px solid #dddddd;
  text-align: left;
  padding: 8px;
  max-width: 100px;
  width: auto;
}
</style>