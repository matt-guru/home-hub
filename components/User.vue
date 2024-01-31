<template>
  <div class="flex-shrink-0 w-64 flex flex-col text-center mr-4">
    <img class="w-24 h-24 rounded-full mx-auto" :src="`./img/${props.user.image}`" alt="" width="384" height="512" />
    <h2 class="mb-2">{{ props.user.name }}</h2>
    <button
      class="w-full pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5 ring-1 ring-slate-900/10 text-gray-500 hover:text-white hover:bg-indigo-500"
      @click="addTodoItem"
    >
      + New
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  user: Object
})

const emits = defineEmits(['addTodo']) // Define the custom event

const addTodoItem = () => {
  emits('addTodo', props.user.id) // Emit the custom event when the button is clicked
}
</script>
