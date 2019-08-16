<template>
  <div id="app">
    <Welcome/>
  </div>
</template>

<script>
import Welcome from './pages/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
}
body{
  background-color: #292929;
}
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  height: 100%;
}
:root{
  --primary: #263238;
  --primary-dark: #000a12;
  --primary-light: #4f5b62;
}
</style>
