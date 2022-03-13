<template>
  <div class="hero">
    <slot
      v-bind:className="'hero__image'"
      name="image"
    />

    <div
      v-if="tagline"
      class="hero__tagline-wrapper"
    >
      <span class="hero__tagline">
        {{ tagline }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tagline: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.hero__tagline-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero__tagline {
  font-size: 42px;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 0 6px rgba(#000, .3);
}
</style>