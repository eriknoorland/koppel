<template>
  <koppel-section class="notification">
    <p class="notification__body">
      <slot />
    </p>
  </koppel-section>
</template>

<script>
import KoppelSection from 'koppel-components/src/components/KoppelSection';

export default {
  components: {
    KoppelSection,
  },
};
</script>

<style lang="scss" scoped>
  .notification__body {
    padding: 20px;
    border-radius: 10px;
    background: rgba(235, 186, 52, .5);
  }
</style>