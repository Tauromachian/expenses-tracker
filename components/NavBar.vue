<script setup>
const links = [
  {
    name: "Expenses Tracker",
    to: "/",
  },
  {
    name: "Compound Calculator",
    to: "/compound-calculator",
  },
];
</script>

<template>
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-700">
    <li v-for="link in links" :key="link.to" class="me-2">
      <NuxtLink
        :to="link.to"
        class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-500"
        active-class="text-white bg-primary-500 hover:bg-primary-400"
      >
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
