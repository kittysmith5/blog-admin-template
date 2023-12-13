<template>
  <!-- <div> -->
    <tr v-show="!isDeleled">
      <td>{{ index }}</td>
      <td>{{ blog.uuid }}</td>
      <td>{{ blog.title }}</td>
      <td>{{ blog.date }}</td>
      <td>
        <my-button type="success" @click="seeMDText(blog.uuid)"
          >查 看</my-button
        >
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
      isDeleled: false,
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

<style lang="scss">
td {
  border: 1.5px solid #dddddd;
  text-align: left;
  padding: 8px;
  max-width: 100px;
  width: auto;
}
</style>