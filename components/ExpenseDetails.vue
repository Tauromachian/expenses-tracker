<script setup>
import { initTooltips } from "flowbite";

onMounted(() => {
  initTooltips();
});

const props = defineProps({
  details: Object,
  category: Object,
});
const emit = defineEmits(["removeExpense"]);

function handleRemove() {
  emit("removeExpense");
}

let showTrash = ref(false);
</script>

<template>
  <div class="flex items-center mb-4">
    <button
      :data-tooltip-target="`tooltip-${details.id}`"
      data-tooltip-trigger="hover"
      class="cursor-default"
      type="button"
    >
      <Icon
        :name="category.icon"
        :color="category.color"
        class="w-10 h-10 p-2 mr-3 rounded-full dynamic-bg"
      />
    </button>

    <div
      :id="`tooltip-${details.id}`"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip transition-opacity duration-300 ease-in-out"
    >
      {{ category.name }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <div
      class="w-full"
      @mouseover="showTrash = true"
      @mouseout="showTrash = false"
    >
      <div class="flex font-bold justify-between text-gray-800">
        <span>{{ details.name }}</span>
        <span class="text-sm">$ {{ details.expense }}</span>
      </div>
      <div class="flex justify-between">
        <p class="text-sm">{{ details.description }}</p>
        <Icon
          name="material-symbols-light:delete-outline"
          class="opacity-0 w-5 h-5 text-red-700 cursor-pointer hover:text-red-800 transition-all duration-100 ease-in-out"
          :class="{ 'opacity-100': showTrash }"
          @click="handleRemove"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dynamic-bg {
  background-color: v-bind(category.bgColor);
}
</style>
