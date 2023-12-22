<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="(blog, index) in blogs"
          :key="blog.uuid"
          :blog="blog"
          :index="index"
          :class="{ even: index % 2 == 1 }"
        />
      </tbody>
    </table>
    <button @click="mdTextDialogVisible = true">点我显示</button>
    <!-- <my-dialogue v-show="!mdTextDialogVisible"></my-dialogue> -->
    <my-dialogue
      ref="dialogue"
      v-show="mdTextDialogVisible"
      :mdTextDialogVisible="mdTextDialogVisible"
    >
      <template v-slot:header>
        <h1>{{ showedBlog.title }}</h1>
      </template>
      <template v-slot:content>
        <vue-markdown :key="showedBlog.uuid" style="margin-top:25px;">
          {{ showedBlog.mdText }}
        </vue-markdown>
      </template>
      <template v-slot:footer>
        <my-button style="height: 10px" type="primary" size="small"
          @click="changeMDTextDialog(false)" >确定</my-button
        >
      </template>
    </my-dialogue>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

import blogApi from "@/api/blogApi.js";
import TableRow from "./TableRow.vue";
import MyDialogue from "@/components/MyDialogue.vue";
import MyButton from "@/components/MyButton.vue";
export default {
  name: "MyTable",
  components: {
    TableRow,
    "my-dialogue": MyDialogue,
    "my-button": MyButton,
    VueMarkdown,
  },
  data() {
    return {
      mdTextDialogVisible: false,
      titles: [],
      blogs: [],
      showedBlog: {
        title: "",
        mdText: "",
        uuid: "",
      },
    };
  },
  methods: {
    handTestClick() {
      console.log("handTestClick");
    },
    changeMDTextDialog(status) {
      this.mdTextDialogVisible = status;
    },
    async getMDTextByUUID(title,uuid) {
      // console.log(uuid);
      try {
        const res = await blogApi.fetchMDTextByUUID(uuid);
        // console.log("res");
        this.showedBlog = {
          title,
          uuid,
          mdText: res.data[0]["md_text"],
        };
        console.log(this.showedBlog);
        this.changeMDTextDialog(true);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    // freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；
    // 由于title不再修改，所以可以冻结，不会生成多余的getter setter方法
    this.titles = Object.freeze([
      "#",
      "uuid",
      "title",
      "date",
      "md_text",
      "action",
    ]);

    blogApi.fetch().then((res) => {
      this.blogs = res.data;
    });
  },
  mounted() {
    this.$refs.dialogue.$on("changeMDTextDialog", this.changeMDTextDialog);
    this.$bus.$on("getMDTextByUUID", this.getMDTextByUUID);
  },
  beforeDestroy() {
    this.$refs.dialogue.$off("changeMDTextDialog", this.changeMDTextDialog);
    this.$bus.$off("getMDTextByUUID", this.getMDTextByUUID);
  },
};
</script>

<style lang="scss" scoped >
$bgColor: #f2f2f2;

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  border: 1.5px solid #dddddd;
  text-align: left;
  padding: 8px;
  max-width: 100px;
  width: auto;
}

th {
  background-color: $bgColor;
}

.even {
  background-color: $bgColor;
}
</style>