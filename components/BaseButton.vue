<template>
  <button
    class="bg-teal-700 text-white px-3 py-2 text-teal-700 rounded-full focus:bg-teal-700 focus:text-white hover:bg-teal-700 hover:text-white transition"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({});
</script>

<style lang="scss" scoped></style>
