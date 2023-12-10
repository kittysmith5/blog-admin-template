<template>
  <!-- 编辑框 -->
  <el-dialog
    :visible.sync="editDialogVisible"
    width="50%"
    :before-close="handleEditClose"
  >
    <template slot="title">
      <h1>编辑博客</h1>
    </template>
    <el-row :gutter="14">
      <el-col :span="20">
        <el-input placeholder="请输入内容" v-model="blog.newUUID" disabled>
          <template slot="prepend">UUID</template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="randomUUID">随机UUID</el-button>
      </el-col>
    </el-row>

    <div style="margin: 15px 0"></div>
    <el-row>
      <el-input v-model="blog.title">
        <template slot="prepend">Title</template>
      </el-input>
    </el-row>
    <el-row style="margin: 15px 0">
      <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 15 }"
        placeholder="请输入内容"
        v-model="blog.mdText"
      >
      </el-input>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button type="warning" @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

import blogApi from "@/api/blogApi.js";

export default {
  name: "EditDialog",
  props: ["editDialogVisible", "data"],
  data() {
    return {
      blog: {
        uuid: "",
        newUUID: "",
        title: "",
        mdText: "",
      },
    };
  },
  methods: {
    handleConfirm() {
      console.log(this.blog);
      blogApi
        .editBlog(this.blog)
        .then((res) => {
          this.$message({
            message: "编辑成功",
            type: "success",
          });
          console.log(res);
        })
        .catch((err) => {
          this.$message({
            message: "编辑失败",
            type: "error",
          });
          console.log(err.message);
        });
      this.$emit("changeEditDiaVis", false);
    },
    handleCancel() {
      this.$emit("changeEditDiaVis", false);
      this.blog = { uuid: "", newUUID: "", title: "", mdText: "" };
    },
    handleEditClose() {
      //为什么不能直接让blog为空?

      this.blog = { uuid: "", newUUID: "", title: "", mdText: "" };
      this.$emit("changeEditDiaVis", false);
    },
    randomUUID() {
      this.blog.newUUID = uuidv4();
    },
  },
  watch: {
    data: {
      handler(val, _) {
        this.blog.uuid = val.uuid;
        this.blog.newUUID = val.uuid;
        this.blog.title = val.title;
        this.blog.mdText = val.mdText;
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>

<style scoped>
</style>
