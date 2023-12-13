<template>
  <div id="main-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="#"></el-table-column>
      <!-- <el-table-column prop="uuid" label="uuid"> </el-table-column> -->
      <el-table-column prop="title" label="title"> </el-table-column>
      <el-table-column prop="date" label="date"> </el-table-column>

      <el-table-column label="text">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="showMDText(scope.row)"
            >查看
          </el-button>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="action">
        <template slot-scope="scope">
          <el-button type="warning" size="mini" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <template>
            <el-popconfirm
              title="确定删除这篇博客吗？"
              @confirm="handleDel(scope.row.uuid)"
            >
              <el-button slot="reference" type="danger" size="mini"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <!-- blog查看框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- 套一个div解决弹窗高度设置 -->
      <!-- detail see: https://juejin.cn/post/7119749532019064839 -->
      <template slot="title">
        <h1>{{ showedBlog.title }}</h1>
      </template>
      <div class="el-dialog-div">
        <vue-markdown :key="showedBlog.uuid">{{
          showedBlog.mdText
        }}</vue-markdown>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>

    <EditDialog
      :editDialogVisible="editDialogVisible"
      :data="editBlog"
      ref="edit-dialog"
    />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'

import blogApi from "@/api/blogApi.js";
import EditDialog from "./EditDialog.vue";

export default {
  name: "Table",
  // Your component's properties, methods, etc. go here
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      editDialogVisible: false,
      // updateKey: 0,
      showedBlog: {
        title: "",
        mdText: "",
        uuid: "",
      },
      editBlog: {
        title: "",
        mdText: "",
        uuid: "",
      },
    };
  },
  components: {
    VueMarkdown,
    EditDialog,
  },
  methods: {
    showMDText(row) {
      // console.log(row);
      blogApi.fetchMDTextByUUID(row.uuid).then((res) => {
        // console.log(res);
        this.showedBlog.uuid = row.uuid;
        this.showedBlog.title = row.title;
        this.showedBlog.mdText = res.data["md_text"];
        this.dialogVisible = true;
      });
    },
    handleClose() {
      this.dialogVisible = false;
      this.showedBlog = {};
    },

    handleEdit(row) {
      console.log(row);
      blogApi.fetchMDTextByUUID(row.uuid).then((res) => {
        // console.log(res);
        this.editBlog.uuid = row.uuid;
        this.editBlog.title = row.title;
        this.editBlog.mdText = res.data["md_text"];
        this.editDialogVisible = true;
      });
    },
    handleDel(uuid) {
      console.log("del", uuid);
      blogApi
        .delBlogByUUID(uuid)
        .then((res) => {
          console.log(res);
          this.$message({
            message: "删除成功",
            type: "success",
          });
          blogApi.fetch().then((res) => {
            this.tableData = res.data;
          });
        })
        .catch((err) => {
          console.log(err);
          this.$message({
            message: "删除失败",
            type: "error",
          });
        });
    },
  },
  mounted() {
    blogApi.fetch().then((res) => {
      this.tableData = res.data;
    });

    this.$refs["edit-dialog"].$on("changeEditDiaVis", (isShow) => {
      this.editDialogVisible = isShow;
    });
  },
};
</script>

<style lang="scss" scoped>
#main-table {
  width: 100%;
}

.el-dialog-div {
  height: 60vh;
  overflow: auto;
}
</style>
