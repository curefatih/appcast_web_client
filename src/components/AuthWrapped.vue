<template>
  <div class="app-wrapped xl-flexbox">
    <div class="sidebar-wrapped" v-if="this.$route.path !== '/'">
      <Sidebar />
    </div>
    <div class="content-wrapped">
      <transition name="moveInUp">
        <slot></slot>
      </transition>
    </div>
  </div>
</template>

<script>
// components
import Sidebar from "../components/Sidebar";

// pages
// import Profile from "./Profile";

export default {
  name: "AuthWrapped",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.app-wrapped {
  width: 100%;
  height: 100%;
  /* display: flex; */
}
.sidebar-wrapped {
  height: 100%;
  width: 60px;
}
.content-wrapped {
  height: 100%;
  flex: 1 1 0;
  font-size: 12px;
  color: #fff;
  overflow: auto;
}
</style>