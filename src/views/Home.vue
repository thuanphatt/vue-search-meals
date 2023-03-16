<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />
    <div class="flex gap-1 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

import axiosClient from "../axiosClient";

const ingredients = ref([]);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
onMounted(async () => {
  const res = await axiosClient.get("/list.php?i=list");
  ingredients.value = res.data;
});
</script>
