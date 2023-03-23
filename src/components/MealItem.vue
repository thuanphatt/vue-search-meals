<template>
  <div
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="px-3 py-4">
      <h3 class="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
        {{ meal.strMeal }}
      </h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <youtube-button :href="meal.strYoutube"> Youtube </youtube-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
