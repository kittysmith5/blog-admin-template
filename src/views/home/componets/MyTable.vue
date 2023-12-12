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
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import blogApi from "@/api/blogApi.js";
import TableRow from "./TableRow.vue";

export default {
  name: "MyTable",
  components: {
    TableRow,
  },
  data() {
    return {
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
    const lists = ["#", "uuid", "title", "date", "md_text", "action"];
    this.titles = Object.freeze(lists);

    blogApi.fetch().then((res) => {
      this.blogs = res.data;
    });
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1.5px solid #dddddd;
  text-align: left;
  padding: 8px;
  max-width: 100px;
  width: auto;
}

th {
  background-color: #f2f2f2;
}

.even {
  background-color: #f2f2f2;
}
</style>