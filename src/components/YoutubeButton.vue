<template lang="">
  <div>
    <a
      :href="href"
      target="_black"
      class="px-4 py-1 flex items-center justify-between rounded border-2 border-red-600 bg-red-600 text-white hover:bg-red-500 transition-colors hover:border-red-500"
    >
      <ion-icon name="logo-youtube" class="mr-2"></ion-icon>
      <span class="m-0 p-0 mb[-4px]">
        <slot> Youtube </slot>
      </span>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
<style lang=""></style>
