<template>
  <div class="modal">
    <div class="main">
      <button class="cancel-button" @click="close">x</button>
      <div class="header">
        <slot name="header">头部</slot>
      </div>
      <div class="center">
        <div class="content">
          <slot name="content">默认文字</slot>
        </div>
      </div>
      <div class="footer">
        <slot name="footer">页脚</slot>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  data() {
    return {};
  },
  props: ["mdTextDialogVisible"],
  components: {
    "my-button": MyButton,
  },
  methods: {
    close() {
      this.$emit("changeMDTextDialog",false);
    },
  },
};
</script>


<style lang="scss" scoped>
$primary: rgb(64, 158, 255);
.modal {
  //   display: none;
  position: fixed; /* 固定定位 */
  z-index: 1; /* 位于顶层 */
  left: 0;
  top: 0;
  width: 100%; /* 宽度全屏 */
  height: 100%; /* 高度全屏 */
  overflow: auto; /* 如果需要滚动条 */
  background-color: rgba(0, 0, 0, 0.4); /* 背景颜色，带透明度 */
  .main {
    position: relative;
    max-height: 1000px;
    background-color: #fefefe;
    margin: 5% auto; /* 15% 从顶部开始 */
    padding: 20px;
    border: 1px solid #888;
    width: 60%; /* 可以调整宽度 */
    .cancel-button {
      color: #888;
      position: absolute; /* 绝对定位 */
      top: 0; /* 距离容器顶部0 */
      right: 7.5px; /* 距离容器右侧0 */
      border: none;
      background: #fefefe;
      font-size: 20px;
      &:hover {
        color: $primary;
      }
    }
    .header {
      // background-color: aqua;
      height: 50px;
      width: 100%;
    }
    .footer {
      // background-color: green;
      height: 50px;
      bottom: 0;
      width: 100%;
      // float: right;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .center {
      overflow: auto;
      height: 700px;
      .content {
        // background-color: azure;
        // height: 2000px;
      }
    }
  }
}
</style>