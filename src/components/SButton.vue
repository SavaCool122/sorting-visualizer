<template>
  <button
    v-bind="$attrs"
    :class="{
        'cursor-not-allowed': disabled,
        'bg-gray-400': disabled,
        'bg-blue-400': active,
      }"
    :disabled="disabled"
    class="p-2 border-black border-2 bg-gray-100"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "SButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
