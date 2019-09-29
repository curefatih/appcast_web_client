<template>
  <b-collapse class="card" aria-id="contentIdForA11y3" :open="open">
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="contentIdForA11y3"
    >
      <p class="card-header-title">{{title}}</p>
      <a class="card-header-icon">
        <b-icon :icon="open ? 'menu-up' : 'menu-down'" type="is-white"></b-icon>
      </a>
    </div>
    <div class="card-content">
      <slot />
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: "Collapse",
  props:{
    title: String,
    open: Boolean
  }
};
</script>

<style>
.card{
  border-radius: .2em;
  background-color: var(--primary);
  overflow: hidden;
}
.card-header {
  background-color: var(--primary-dark);
}
.card-content{
  /* background-color: var(--primary-dark); */
}
</style>