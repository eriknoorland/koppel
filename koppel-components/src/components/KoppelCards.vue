<template>
  <div
    v-bind:class="{
      [blockName]: true,
      [modifierClasses]: true,
    }"
  >
    <slot />
  </div>
</template>

<script>
import modifiers from '../mixins/modifiers';

export default {
  mixins: [
    modifiers,
  ],

  data() {
    return {
      blockName: 'cards',
    };
  },
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &--2-columns {

  }
}
</style>