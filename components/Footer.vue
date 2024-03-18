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
      <Icon
        name="uil:whatsapp"
        class="w-9 h-9 cursor-pointer hover:text-gray-800 transform hover:scale-125 transition ease-in-out duration-200"
        @click="contactMe(`https://wa.me/5356653917`)"
      />
      <Icon
        name="uil:telegram"
        class="w-9 h-9 cursor-pointer hover:text-gray-800 transform hover:scale-125 transition ease-in-out duration-200"
        @click="contactMe(`https://t.me/cmorellr`)"
      />
      <Icon
        name="uil:github"
        class="w-9 h-9 cursor-pointer hover:text-gray-800 transform hover:scale-125 transition ease-in-out duration-200"
        @click="contactMe(`https://github.com/pfrito`)"
      />
    </div>
    <div
      class="flex flex-col mobile:flex-row items-center text-center mobile:mb-5"
    >
      <span>©2024 Designed, created and maintained by </span>
      <a
        href="https://github.com/pfrito"
        class="uppercase hover:text-gray-800 mobile:ml-2"
        >Carlos</a
      >
    </div>
  </footer>
</template>
