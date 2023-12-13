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
    <my-dialogue v-show="mdTextDialogVisible">
      <template v-slot:header>
        <span>header</span>
      </template>
      <template v-slot:content>
        <span>content</span>
      </template>
      <template v-slot:footer>
        <span>footer</span>
      </template>
    </my-dialogue>
  </div>
</template>

<script>
import blogApi from "@/api/blogApi.js";
import TableRow from "./TableRow.vue";
import MyDialogue from "@/components/MyDialogue.vue";
export default {
  name: "MyTable",
  components: {
    TableRow,
    "my-dialogue": MyDialogue,
  },
  data() {
    return {
      mdTextDialogVisible: false,
      titles: [],
      blogs: [],
    };
  },
  methods: {
    handTestClick() {
      console.log("handTestClick");
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