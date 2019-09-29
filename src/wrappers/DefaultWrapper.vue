<template>
  <div class="app-wrapped xl-flexbox">
    <div class="sidebar-wrapped">
      <Sidebar />
    </div>
    <div class="content-wrapped">
      <transition name="moveInUp">
        <slot />
      </transition>
    </div>
  </div>
</template>

<script>
// components
import Sidebar from "../components/Sidebar";

export default {
  name: "DefaultWrapper",
  components: {
    Sidebar
  }
};
</script>

<style>
html{
  overflow: hidden;
}
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
  color: #fff;
  overflow: auto;
}
</style>