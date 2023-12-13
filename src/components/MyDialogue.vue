<template>
  <div class="modal">
    <div class="main">
      <button class="cancel-button">取消</button>
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
  props: [],
  components: {
    "my-button": MyButton,
  },
};
</script>


<style lang="scss">
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
    // flex: 1;
    // display: flex;
    // flex-direction: column;
    max-height: 700px;
    overflow: auto;
    background-color: #fefefe;
    margin: 5% auto; /* 15% 从顶部开始 */
    padding: 15px;
    border: 1px solid #888;
    width: 60%; /* 可以调整宽度 */
    .cancel-butto {
      position: absolute; /* 绝对定位 */
      top: 0; /* 距离容器顶部0 */
      right: 0; /* 距离容器右侧0 */
      margin-right: -20px; /* 右侧外边距，等于容器的padding值 */
      margin-top: -20px; /* 顶部外边距，等于容器的padding值 */
    }
    .header {
      background-color: aqua;
      height: 50px;
      width: 100%;
    }
    .footer {
      background-color: green;
      height: 50px;
      bottom: 0;
      width: 100%;
    }
    .center {
      overflow: auto;
      height: 500px;
      .content {
        background-color: azure;
        height: 1000px;
      }
    }
  }
}
</style>