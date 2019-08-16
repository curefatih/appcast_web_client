<template>
  <div class="welcome wrap xl-2 xl-flexbox xl-middle xl-center">
    <div class="col welcome-left">
      <div class="wrap xl-1 xl-flexbox xl-middle xl-center welcome-right_wrap">
        <div class="col">
          <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </div>
    </div>
    <div class="col welcome-right">
      <div class="wrap xl-1 xl-flexbox xl-middle xl-center welcome-right_wrap">
        <div class="col">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  name: "HelloWorld",
  components:{
    LoginForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  height: 100%;
}

.welcome-left {
  height: 100%;
}

.welcome-left::after {
  content: "";
  background: url(~../assets/welcome.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  /* background-attachment: fixed; */
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.welcome-right {
  height: 100%;
  background-color: #000a12;
  color: #fff;
}

.welcome-right_wrap {
  height: 100%;
}

.welcome-right_wrap .col {
  font-weight: thin;
  font-size: 36px;
}
</style>
