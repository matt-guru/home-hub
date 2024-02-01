<template>
  <div
    :class="`flex-shrink-0 w-64 mr-4 rounded-lg bg-white text-lg text-left leading-5 text-slate-900 shadow-lg shadow-black/5 ring-1 ring-slate-700/10 mb-4 border-l-4 border-s-${props.color}-500`"
  >
    <div v-if="!editing" class="p-4" @click="startEditing">{{ props.task.title }}</div>
    <div v-if="editing" class="p-4">
      <input v-model="editedTitle" @blur="stopEditing" @keyup.enter="stopEditing" class="w-full border rounded p-2" />
    </div>
    <div class="flex gap-3 p-4">
      <button
        class="w-full pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5 ring-1 ring-slate-900/10 hover:text-white hover:bg-green-400 transition-all"
        @click="completeTask"
      >
        Done
      </button>
    </div>
  </div>
  <!-- border-s-orange-500 border-s-blue-500 border-s-green-500 -->
</template>

<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps(['task', 'color', 'userId'])
const emits = defineEmits(['updateTaskTitle', 'removeTask'])

const editing = ref(false)
const editedTitle = ref(props.task.title)

const startEditing = () => {
  editing.value = true
}

const stopEditing = async () => {
  editing.value = false

  await nextTick()

  emits('updateTaskTitle', { userId: props.userId, taskId: props.task.id, newTitle: editedTitle.value })
}

const completeTask = () => {
  emits('removeTask', { userId: props.userId, taskId: props.task.id })
}
</script>
