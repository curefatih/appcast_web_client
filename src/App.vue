<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Buefy);

export default {
  name: "app"
};
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
@import './assets/css/reset.css';
@import './assets/css/flex.css';

// Set your colors
$primary: #263238;
$primary-invert: findColorInvert($primary);
$secondary: #388e3c;
$secondary-invert: findColorInvert($secondary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "secondary": (
    $secondary,
    $secondary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

$primary: #263238;
$primary-dark: #212121;
$primary-light: #4f5b62;

html,
body {
  width: 100%;
  height: 100%;
}
body {
  background-color: $primary-dark;
}
* {
  box-sizing: border-box;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff8;
  height: 100%;
  font-size: 16px;
}
:root {
  --primary: #263238;
  --primary-dark: #111111;
  --primary-light: #4f5b62;
  --secondary: #34495e;
  --secondary-dark: #0005;
  --secondary-dark-full: #000;
  --secondary-ligt: #2c3e50;
  --yellow: #ffb900;
  --blue: #2980b9;
}

.f_content {
  max-width: 960px;
  margin: 0 auto;
  padding: 50px 0;
  font-size: 100%;
}
// .f_content h1 {
//   font-size: 2em;
//   margin-bottom: 0.5em;
// }
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.8em;
}
h3 {
  font-size: 1.5em;
}
h4 {
  font-size: 1.3em;
}
h5 {
  font-size: 1.1em;
}
h6 {
  font-size: 1em;
}
</style>
