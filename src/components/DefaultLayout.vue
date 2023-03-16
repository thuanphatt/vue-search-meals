<template>
  <div class="bg-gray-100 h-full">
    <navbar />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped></style>
