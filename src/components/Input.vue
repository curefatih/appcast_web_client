<template>
  <label class="input-label">
    <h1>{{labelText}}</h1>
    <input 
    class="input" 
    :type="type" 
    :placeholder="placeholder"
    :style="inputStyle"
     :autocomplete="autocomplete ? 'on' : 'off'"/>
  </label>
</template>

<script>
export default {
  props: {
    labelText: String,
    type: String,
    placeholder: String,
    inputStyle: String,
    autocomplete: Boolean
  }
};
</script>

<style>
.input-label {
  display: block;
  padding: 10px;
}
.input-label h1 {
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
}

.input {
  width: 100%;
  font-size: 12px;
  color: #fff;
  background-color: #000a12;
  border: 1px solid #263238;
  border-radius: 2em;
  padding: 15px 30px;
  margin-bottom: 0;
  margin-top: 2px;
  opacity: 0.8;
  transition: 0.2s;
}
.input:hover,
.input:focus {
  opacity: 1;
}
</style>