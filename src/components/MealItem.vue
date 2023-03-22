<template>
  <div :key="meal.idMeal" class="bg-white shadow rounded-xl">
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
      <p class="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla
        autem saepe corporis numquam tempore? Quisquam facilis
      </p>
      <div class="flex items-center justify-between">
        <youtube-button :href="meal.strYoutube"> Youtube </youtube-button>
        <!-- <router-link
            to="/"
            class="px-3 py-2 rounded border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >View</router-link
          > -->
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
