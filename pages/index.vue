<template>
  <div class="container mx-auto text-center">
    <h1 class="text-3xl my-6">Welcome to Home hub</h1>
    <ol class="flex flex-row justify-center">
      <li class="mx-4">
        <NuxtLink to="/to-dos">
          <div class="flex flex-col">
            <img class="w-36 h-36 rounded-full mx-auto" src="/img/home.jpeg" alt="" width="384" height="512" />
            <p>The Happiness Hotel</p>
          </div>
        </NuxtLink>
      </li>
      <li>
        <div>
          <span class="flex text-3xl text-gray-400 justify-center items-center bg-gray-200 rounded-full h-36 w-36"
            >+</span
          >
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
</script>
