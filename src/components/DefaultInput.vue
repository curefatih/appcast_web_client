<template>
 <b-field>
    <b-input custom-class="dark-input" v-bind=this.$attrs></b-input>
  </b-field>
</template>

<script>
export default {
  name: "DefaultInput",
  // props:[ 
  //   placeholder,
  //   type,
  //   value
  // ]
};
</script>
<style>
.dark-input {
  margin: 0.5em 0;
  background-color: #111;
  border: 1px solid transparent;
  transition: 0.2s all;
  color: #555;
  cursor: pointer;
}
.dark-input:hover {
  border: 1px solid #666;
}
.dark-input:focus {
  background-color: #333;
  border: 1px solid #999;
  color: #fff;
}

.dark-input::placeholder{
  color: #777;
}

</style>