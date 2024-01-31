<template>
  <div
    :class="`flex-shrink-0 w-64 mr-4 rounded-lg bg-white text-lg text-left leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 mb-4 border-l-4 border-s-${props.color}-500`"
  >
    <div v-if="!editing" class="p-4" @click="startEditing">{{ props.task.title }}</div>
    <div v-if="editing" class="p-4">
      <input
        v-model="editedTitle"
        @input="updateTitle"
        @blur="stopEditing"
        @keyup.enter="stopEditing"
        class="w-full border rounded p-2"
      />
    </div>
    <div class="flex gap-3 p-4">
      <button
        class="w-full pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5 outline outline-1 hover:text-white hover:bg-indigo-500"
        @click="completeTask"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, nextTick } from 'vue'

const props = defineProps(['task', 'color', 'userId'])
const emits = defineEmits(['updateTaskTitle', 'removeTask']) // Add 'removeTask' to emitted events

const editing = ref(false)
const editedTitle = ref(props.task.title)

const taskToEdit = computed(() => {
  return data.value[0].people.find(u => u.id === props.userId)?.['to-dos'].find(t => t.id === props.task.id)
})

const startEditing = () => {
  editing.value = true
}

const stopEditing = async () => {
  editing.value = false

  await nextTick()

  emits('updateTaskTitle', { userId: props.userId, taskId: props.task.id, newTitle: editedTitle.value })
}

const updateTitle = () => {}

const completeTask = () => {
  emits('removeTask', { userId: props.userId, taskId: props.task.id })
}
</script>
