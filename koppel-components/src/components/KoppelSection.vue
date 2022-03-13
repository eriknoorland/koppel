<template>
  <section
    v-bind:class="{
      [blockName]: true,
      [modifierClasses]: true,
    }"
  >
    <slot />
  </section>
</template>

<script>
import modifiers from '../mixins/modifiers';

export default {
  mixins: [
    modifiers,
  ],

  data() {
    return {
      blockName: 'section',
    };
  },
}
</script>

<style lang="scss" scoped>
.section {
  padding: 20px 0;

  &--no-padding {
    padding: 0;
  }

  &--padding-top {
    padding-top: 20px;
  }

  &--padding-bottom {
    padding-bottom: 20px;
  }

  &--breakout {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
}
</style>