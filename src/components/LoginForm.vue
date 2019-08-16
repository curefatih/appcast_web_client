<template>
  <div class="login-form wrap xl-2 xl-center">
    <div class="col xl-1">
      <form>
        <Input
          type="email"
          placeholder="johndoe@email.com"
          labelText="email"
          inputStyle="text-align: center;"
        />
        <Input
          type="password"
          placeholder="......"
          labelText="password"
          inputStyle="text-align: center;"
          />
        <Button type="submit" value="Login" style="width: calc(100% - 20px); margin-top: 30px;" />
      </form>
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
import Button from "./Button.vue";

export default {
  name: "LoginForm",
  components: {
    Input,
    Button
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
body {
  background-color: #292929;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  height: 100%;
}
</style>
