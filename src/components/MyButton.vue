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


<style lang="scss">
$small: 30px;
$medium: 40px;

$sucess: rgb(103, 194, 58);
$primary: rgb(64, 158, 255);
$danger: rgb(245, 108, 108);
// $default:rgb(220, 223, 230);
$info: rgb(144, 147, 153);
$warning: rgb(230, 162, 60);

@mixin btnTheme($color) {
  background: $color;
  border: 1px solid rgba($color, 0.5);
}

@mixin btnSize($size) {
  height: $size;
  width: $size*1.618;
  padding: 4px;
}

.btn {
  transition: opacity 0.3s ease;
  border-radius: 5px;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.66;
  }
}

.btn-default {
  border: 1px solid rgb(220, 223, 230);
  color: rgb(96, 98, 102);
  background: white;
}

.btn-primary {
  @include btnTheme($primary);
}

.btn-danger {
  @include btnTheme($danger);
}

.btn-success {
  @include btnTheme($sucess);
}

.btn-info {
  @include btnTheme($info);
}

.btn-warning {
  @include btnTheme($warning);
}

.btn-small {
  // height: 10px;
  @include btnSize($small);
}
.btn-medium {
  @include btnSize($medium);
}
</style>