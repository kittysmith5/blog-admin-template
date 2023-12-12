<template functional>
  <button
    v-on="listeners"
    v-bind="data.attrs"
    :class="['btn', `btn-${props.type}`, `btn-${props.size}`]"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "small",
    },
  },
};
</script>


<style>
.btn {
  transition: opacity 0.3s ease;
  border-radius: 5px;
  color: white;
}

.btn-default {
  border: 1px solid rgb(220, 223, 230);
  color: rgb(96, 98, 102);
  background: white;
}

.btn-primary {
  background: rgb(64, 158, 255);
  border: 1px solid rgb(179, 216, 255);
}

.btn-danger {
  background: rgb(245, 108, 108);
  border: 1px solid rgb(251, 196, 196);
}

.btn-success {
  background: rgb(103, 194, 58);
  border: 1px solid rgb(194, 231, 176);
}

.btn-info {
  background: rgb(144, 147, 153);
  border: 1px solid rgb(211, 212, 214);
}

.btn-warning {
  background: rgb(230, 162, 60);
  border: 1px solid rgb(245, 218, 177);
}

.btn-small {
  height: 30px;
  width: auto;
  padding: 5px;
}
.btn-medium {
  height: 40px;
  width: auto;
  padding: 5px;
}
button:hover {
  cursor: pointer;
  opacity: 0.66;
  /* color: black; */
}
</style>