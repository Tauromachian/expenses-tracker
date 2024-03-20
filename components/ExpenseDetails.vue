<script setup>
const props = defineProps({
  details: Object,
  category: Object,
});
</script>

<template>
  <div class="flex items-center mb-4">
    <Icon
      :name="category.icon"
      :color="category.color"
      class="w-11 h-10 p-2 mr-3 rounded-full dynamic-bg"
    />
    <div class="w-full">
      <div class="flex font-bold justify-between text-gray-800">
        <span>{{ details.name }}</span>
        <span class="text-sm">$ {{ details.expense }}</span>
      </div>
      <p class="text-sm">{{ details.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.dynamic-bg {
  background-color: v-bind(category.bgColor);
}
</style>
