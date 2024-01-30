<template>
  <tr>
    <td>
      {{ data.label }}
      <span style="font-style: italic;">
        ({{ data.duration }})
      </span>
    </td>

    <td>
      {{ data.price }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
};
</script>