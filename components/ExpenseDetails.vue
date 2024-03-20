<script setup>
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
    <Icon
      :name="category.icon"
      :color="category.color"
      class="w-11 h-10 p-2 mr-3 rounded-full dynamic-bg"
    />
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
          :class="{'opacity-100':  showTrash}"
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
