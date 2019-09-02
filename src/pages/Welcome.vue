<template>
  <div class="welcome wrap xl-2 xl-flexbox xl-middle xl-center">
    <div class="col welcome-left sm-hidden">
      <div class="wrap xl-1 xl-flexbox xl-middle xl-center welcome-left_wrap">
        <progressive-background class="col welcome-left_bg" src="/static/welcome.jpg" />
        <div class="col welcome-left_content">
          <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </div>
    </div>
    <div class="col welcome-right sm-1-1">
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
  name: "Welcome",
  components: {
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
  position: relative;
}

.welcome-left::after {
  content: "";
  /* background: url(~../assets/welcome.jpg); */
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

.welcome-right_wrap,
.welcome-left_wrap {
  height: 100%;
}

.welcome-right_wrap .col,
.welcome-left_wrap .col {
  font-weight: thin;
  font-size: 36px;
}
.welcome-left_bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
}
.welcome-left_content{
  position: relative;
  z-index: 1;
}
</style>
