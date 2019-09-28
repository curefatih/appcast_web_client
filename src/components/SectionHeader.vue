<template>
  <div class="header">
    <h1>
      <slot />
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  border-bottom: 1px solid var(--secondary-dark);
  margin-bottom: 30px;
}
.header h1 {
  position: relative;
  display: inline-block;
}
.header h1::before {
  content: "";
  width: 100%;
  position: absolute;
  bottom: -0.6em;
  z-index: 2;
  box-sizing: content-box;
  border-bottom: 1px solid var(--blue);
}
</style>