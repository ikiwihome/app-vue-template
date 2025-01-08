<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleLanguage = () => {
  // TODO: Implement language toggle logic
  console.log('Language toggled')
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logo.svg" alt="INNCO Logo" class="h-10">
      </div>

      <div class="flex items-center space-x-4">
        <!-- Language Toggle -->
        <div class="flex items-center space-x-2">
          <button
            class="text-sm font-medium text-gray-700 hover:text-gray-900"
            @click="toggleLanguage"
          >
            CN | EN
          </button>
        </div>
        
        <!-- Contact Button -->
        <button
          variant="outline"
          class="hidden md:flex"
          @click="scrollToContact"
        >
          联系我们
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
