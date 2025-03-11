<script setup>
import { initTooltips } from "flowbite";

onMounted(() => {
  initTooltips();
});

defineProps({
  details: {
    type: Object,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["removeExpense"]);

function handleRemove() {
  emit("removeExpense");
}
</script>

<template>
  <div class="flex items-center py-2">
    <span
      :data-tooltip-target="`tooltip-${details.id}`"
      data-tooltip-trigger="hover"
    >
      <Icon
        :name="category.icon"
        :style="{ color: category.color }"
        class="w-8 h-8 p-2 mr-3 rounded-full"
      />
    </span>

    <div
      :id="`tooltip-${details.id}`"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip transition-opacity duration-300 ease-in-out"
    >
      {{ category.name }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <div
      class="w-full flex"
      @mouseover="showTrash = true"
      @mouseout="showTrash = false"
    >
      <div class="flex flex-col text-gray-800">
        <span class="font-bold">{{ details.name }}</span>
        <p class="text-sm mt-2">{{ details.description }}</p>
      </div>
      <div class="flex flex-col ml-auto">
        <span class="text-sm">$ {{ details.expense }}</span>
        <BaseButton variant="text" @click="handleRemove">
          <Icon
            name="material-symbols:delete-outline"
            class="w-5 h-5 text-red-700 hover:text-red-800 transition-all duration-100 ease-in-out"
          />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
