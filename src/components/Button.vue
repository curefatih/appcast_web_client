<template>
  <button class="button" :type="type">{{value}}</button>
</template>

<script>
export default {
  props:{
    type: String,
    value: String
  }
}
</script>

<style>
.button{
  background-color: var(--primary-dark);
  border: 1px solid #ddd;
  color: #fff;
  padding: 10px 25px;
  border-radius: 2em;
  opacity: .5;
  cursor: pointer;
  transition: .2s all;
}
.button:hover{
  opacity: 1;
}
</style>