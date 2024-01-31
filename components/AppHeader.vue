<template>
  <div class="flex justify-between items-center p-4 text-gray-500 bg-gray-100">
    <div>{{ props.hub }}</div>
    <div class="text-3xl">
      <span v-if="showColon">{{ currentTime }}</span>
      <span v-else>{{ currentTime.replace(':', ' ') }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  hub: String
})

const showColon = ref(true)
const currentTime = ref(getFormattedTime())

function getFormattedTime() {
  const currentDate = new Date()
  let hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12 || 12

  // Toggle colon visibility every second
  showColon.value = !showColon.value

  // Create a string representation in 12-hour format (hh:mm AM/PM)
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`
}

// Update time every second
onMounted(() => {
  setInterval(() => {
    currentTime.value = getFormattedTime()
  }, 1000)
})
</script>
