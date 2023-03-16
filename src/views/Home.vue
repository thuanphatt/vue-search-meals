<template>
  <div class="flex flex-col p-8">
    <div class="flex gap-1 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
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
