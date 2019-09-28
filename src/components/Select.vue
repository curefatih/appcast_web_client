<template>
  <b-field>
    <b-select class="f_select" v-bind="$attrs">
      <slot />
    </b-select>
  </b-field>
</template>

<script>
export default {
  name: "Select"
  // props: {
  //   placeholder: String
  // }
};
</script>

<style>
.f_select select {
  background-color: var(--primary-dark);
  border: 1px solid transparent;
  color: #555;
  /* font-size: 1rem; */
  transition: .2s all;
}

.f_select select:hover {
  background-color: var(--primary-dark);
  border: 1px solid #666;
}
.f_select select:focus {
  background-color: #333;
  border: 1px solid #999;
  color: #fff;
}
</style>>