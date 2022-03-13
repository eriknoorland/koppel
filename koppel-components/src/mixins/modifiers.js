export default {
  props: {
    modifiers: {
      type: String,
      default: '',
    },
  },

  computed: {
    modifierClasses() {
      return this.modifiers
        .split(' ')
        .filter(modifier => !!modifier)
        .map(modifier => `${this.blockName}--${modifier}`)
        .join(' ')
    }
  },
}