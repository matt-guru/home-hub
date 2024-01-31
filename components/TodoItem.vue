<template>
  <div
    :class="`flex-shrink-0 w-64 ml-4 rounded-lg bg-white text-lg text-left leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 mb-4 border-l-4 border-s-${props.color}-500`"
  >
    <div class="p-4">{{ props.task.title }}</div>
    <div class="flex gap-3 p-4">
      <button
        class="w-full pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5 outline outline-1 hover:text-white hover:bg-indigo-500"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  task: Object,
  color: String
})
</script>
