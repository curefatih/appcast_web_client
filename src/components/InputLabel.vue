<template>
  <b-field :label="labelText">
    <b-input custom-class="primary-input" v-bind=$attrs ></b-input>
  </b-field>
</template>

<script>
export default {
  name:"InputPrimary",
  props: {
    labelText: String,
  }
};
</script>

<style>
.primary-input {
  color: #fff;
  background-color: #000a12;
  border: 1px solid var(--primary-light);
  border: 1px solid #263238;
  margin-bottom: 10px;
  margin-top: 2px;
}
</style>