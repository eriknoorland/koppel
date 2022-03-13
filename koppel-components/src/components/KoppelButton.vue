<template>
  <a
    v-bind:href="href"
    target="_blank"
    class="button"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 20px;
  border-radius: 10px;
  background: #000;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  transition: background .35s;

  &:hover {
    background: #424242;
  }
}

</style>