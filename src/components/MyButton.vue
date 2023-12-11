<template>
  <button :class="classArr">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: ["text", "type", "size"],
  data() {
    return {
      classArr: [this.type, this.size],
    };
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.primary {
  background: lightblue;
  color: black;
}

.small {
  height: 30px;
  width: auto;
  border: none;
  padding: 5px;
}

button:hover {
  cursor: pointer;
  color: white;
}
</style>