<template>
  <div class="bg-gray-100 h-full">
    <header class="shadow h-16 flex justify-between items-stretch bg-[#0A2031]">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex text-[#d7d7d7] hover:text-white transition-all font-semibold items-center h-full px-5"
      >
        Home</router-link
      >
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex text-[#d7d7d7] hover:text-white transition-all font-semibold items-center px-2 h-full"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex text-[#d7d7d7] hover:text-white transition-all font-semibold items-center px-2 h-full"
        >
          Meals By Letters
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="inline-flex text-[#d7d7d7] hover:text-white transition-all font-semibold items-center px-2 h-full"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>
<script setup></script>
<style></style>
