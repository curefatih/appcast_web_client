<template>
  <div class="header">
    <h3>
      <slot />
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  border-bottom: 1px solid var(--secondary-dark);
  padding-bottom: 1rem;
}
.header h3 {
  position: relative;
  display: inline-block;
}
.header h3::before {
  content: "";
  width: 100%;
  position: absolute;
  bottom: -0.6em;
  z-index: 2;
  box-sizing: content-box;
  border-bottom: 1px solid var(--blue);
}
</style>