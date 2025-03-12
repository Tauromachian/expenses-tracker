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
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
  >
    <li v-for="link in links" :key="link.to" class="me-2">
      <NuxtLink
        :to="link.to"
        class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        active-class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
      >
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
