<template>
  <div class="bg-gray-100 h-full">
    <header class="shadow h-16 flex justify-between items-stretch bg-[#D6CDA4]">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex text-[#87805E] transition-all font-semibold items-center h-full px-5 hover:text-white"
      >
        Home</router-link
      >
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex text-black hover:bg-[#87805E] hover:text-white transition-all font-semibold items-center px-2 h-full"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex text-black hover:bg-[#87805E] hover:text-white transition-all font-semibold items-center px-2 h-full"
        >
          Meals By Letters
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="inline-flex text-black hover:bg-[#87805E] hover:text-white transition-all font-semibold items-center px-2 h-full"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>
<script setup></script>
<style></style>
