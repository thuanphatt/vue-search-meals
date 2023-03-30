<template>
  <div class="h-full">
    <navbar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
    <footer-app />
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
import FooterApp from "./FooterApp.vue";
</script>

<style scoped></style>
