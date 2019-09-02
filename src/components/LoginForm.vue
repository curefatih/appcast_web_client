<template>
  <div class="login-form_wrap wrap xl-2 xl-center">
    <div class="col xl-1 sm-1-1">
      <form class="login-form xl-left">
        <InputLabel
          type="email"
          placeholder="johndoe@email.com"
          labelText="email"
          size="is-medium"
          rounded
        />
        <InputLabel
          type="password"
          placeholder="....."
          labelText="password"
          size="is-medium"
          rounded
          password-reveal
          />
        <Button 
        native-type="submit"
         size="is-medium"
          type="is-dark"
         value="Login" 
        icon-left="login" 
        class="is-fullwidth" 
        rounded
        style="margin-top: 30px;"
        />
      </form>
    </div>
  </div>
</template>

<script>
import InputLabel from "./InputLabel.vue";
import Button from "./Button.vue";

export default {
  name: "LoginForm",
  components: {
    InputLabel,
    Button
  }
};
</script>

<style>
.login-form label{
  color: #fff;
}
</style>
