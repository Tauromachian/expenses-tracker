<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const emit = defineEmits(["contactMe"]);

function contactMe(url) {
  emit("contactMe", url);
}
</script>

<template>
  <footer
    class="flex flex-col items-center justify-around font-mono text-gray-600 h-56 mobile:h-auto"
  >
    <hr class="h-2 w-full max-w-md mobile:mb-5" />
    <div class="flex gap-2 mb-2">
      <button @click="contactMe(`https://wa.me/5356653917`)">
        <Icon
          name="uil:whatsapp"
          class="w-9 h-9 mobile:w-8 mobile:h-8 hover:text-gray-800 transform hover:scale-125 transition ease-in-out duration-200"
        />
      </button>
      <button @click="contactMe(`https://t.me/cmorellr`)">
        <Icon
          name="uil:telegram"
          class="w-9 h-9 mobile:w-8 mobile:h-8 hover:text-gray-800 transform hover:scale-125 transition ease-in-out duration-200"
        />
      </button>
      <button @click="contactMe(`https://github.com/pfrito`)">
        <Icon
          name="uil:github"
          class="w-9 h-9 mobile:w-8 mobile:h-8 hover:text-gray-800 transform hover:scale-125 transition ease-in-out duration-200"
        />
      </button>
    </div>
    <div
      class="flex flex-col mobile:flex-row items-center text-center mobile:mb-5"
    >
      <span>©2024 Designed, created and maintained by </span>
    </div>
  </footer>
</template>
