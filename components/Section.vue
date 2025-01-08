<script setup lang="ts">
defineProps<{
  id?: string
  class?: string
}>()
</script>

<template>
  <section 
    :id="id"
    class="min-h-screen w-full flex flex-col justify-center items-center p-8"
    :class="class"
  >
    <slot />
  </section>
</template>
