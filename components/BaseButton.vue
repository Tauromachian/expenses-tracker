<template>
  <button
    class="px-3 py-2 rounded-full transition"
    :class="classes"
    :value="value"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "",
    validator(value) {
      return ["", "text", "outlined"].includes(value);
    },
  },
  value: {
    type: [String, Number],
    default: "",
  },
});

const classes = computed(() => {
  const calculatedClasses = {
    text: "bg-transparent",
    regular:
      "bg-teal-700 text-white text-teal-700 focus:bg-teal-700 focus:text-white hover:bg-teal-700",
  };

  if (props.variant === "text") return calculatedClasses.text;

  return calculatedClasses.regular;
});
</script>

<style lang="scss" scoped></style>
