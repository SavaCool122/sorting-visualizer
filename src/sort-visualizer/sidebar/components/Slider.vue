<template>
  <div>
    <div class="text-center">
      <label>{{ label }}</label>
    </div>
    <div class="flex justify-center">
      <input
        :value="modelValue"
        type="range"
        min="0"
        :max="max"
        @input="updateValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("update:model-value", Number(event.target.value) || 0);
    },
  },
};
</script>

<style scoped></style>
