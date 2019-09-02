<template>
  <b-button  class="button-primary" v-bind="$attrs" >{{value}}</b-button>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "ButtonPrimary",
  props: {
    // type: String,
    value: String,
    // "native-type": String
  }
};
</script>

<style>
.button-primary {
  background-color: var(--primary-dark);
  border: 1px solid #ddd;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s all;
  font-size: 1rem !important;
}
.button-primary:hover {
  opacity: 1;
}
</style>