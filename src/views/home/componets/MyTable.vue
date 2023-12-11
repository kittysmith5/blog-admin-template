<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(blog, index) in blogs"
          :key="blog.uuid"
          :class="{ even: index % 2 == 1 }"
        >
          <td>{{ index }}</td>
          <td>{{ blog.uuid }}</td>
          <td>{{ blog.title }}</td>
          <td>{{ blog.date }}</td>
          <td><button>查看</button></td>
          <!-- 
            <el-button type="primary" @click="handleClose">确 定</el-button>
           -->
          <td>
            <my-button type="primary" size="small">我是按钮</my-button><button>
              编辑</button
            ><button>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import MyButton from "@/components/MyButton.vue";
export default {
  name: "MyTable",
  components: {
    TableRow,
    'my-button':MyButton,
  },
  data() {
    return {
      titles: ["#", "uuid", "title", "date", "md_text", "action"],
      blogs: [
        {
          uuid: "e0a1e5db-8ff5-40f7-9c35-5a517f223978",
          title: "为什么1按位取反的结果是-2？？？？",
          date: "2023-11-16T13:03:09.000Z",
        },
        {
          uuid: "c7a6851d-9222-4303-aa33-f3c5d4925769",
          title: "md5信息摘要算法实现(python 和 go版本)",
          date: "2007-08-02T22:05:50.000Z",
        },
        {
          uuid: "53dace40-a8bc-4c5c-b1ca-7a17ee1ad913",
          title: "nodejs 配置国内镜像",
          date: "2015-03-11T22:40:46.000Z",
        },
        {
          uuid: "25f4ff87-bb87-4d37-a54c-221c25dc4716",
          title: "Long类型转换为IP String",
          date: "2019-11-08T06:13:23.000Z",
        },
        {
          uuid: "3199d0da-51d0-455c-bed0-53485540b885",
          title: "Unity C#代码入门",
          date: "2019-10-13T11:52:30.000Z",
        },
        {
          uuid: "0c403d6d-7689-4d69-abae-598f5a7167f4",
          title: "Unity 2D 记录",
          date: "2016-08-29T11:33:06.000Z",
        },
        {
          uuid: "f399b1c7-edcf-4067-840e-1b2a32889c16",
          title: "vue学习记录",
          date: "2016-01-09T15:28:15.000Z",
        },
        {
          uuid: "a364f599-addb-4e89-a6ce-dd5278ef74f9",
          title: "Java Fastjson Unserialize WriteUp",
          date: "2008-03-27T15:29:42.000Z",
        },
        {
          uuid: "61eb3053-c5da-4db3-b264-e20edb3ac3fc",
          title: "Bugku Log4j2 漏洞题目 解题参考",
          date: "2000-09-25T19:17:57.000Z",
        },
        {
          uuid: "ad18f169-b892-4d33-80fc-d8534c82ba99",
          title: "kali 下安装tplmap",
          date: "2019-10-31T08:04:08.000Z",
        },
        {
          uuid: "b9e737e9-2d40-4a28-939a-f841ceff7edb",
          title:
            "kali 下安装tplmapBugku Log4j2 漏洞题目 解题参考Java Fastjson Unserialize WriteUp",
          date: "2023-11-26T14:04:55.000Z",
        },
      ],
    };
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
  border: 1px solid #dddddd;
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