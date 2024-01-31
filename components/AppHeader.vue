<template>
  <div class="flex justify-between items-center p-4 text-gray-500 bg-gray-100">
    <div>{{ props.hub }}</div>
    <div class="text-3xl">{{ time }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  hub: String
})

const time = computed(() => {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = (hours >= 12) ? "pm" : "am";
  
  hours = (hours % 12) || 12;

  return `${hours}:${minutes}${ampm}`;
})

</script>