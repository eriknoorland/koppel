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
  padding: 12px 16px;
  border-radius: 10px;
  background: #000;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  transition: background .35s;

  &:hover {
    background: #424242;
  }

  @media(min-width: 768px) {
    padding: 16px 20px;
    font-size: 16px;
  }
}
</style>