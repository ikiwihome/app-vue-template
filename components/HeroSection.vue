<script setup>
</script>

<template>
  <section 
    id="hero"
    class="relative h-screen flex items-center justify-center"
    style="background-image: url('/images/abstract-1963884_1920.jpg'); background-size: cover; background-position: center;"
  >
    <div class="absolute inset-0 bg-black/30"></div>
    
    <div class="relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
        innco - 定制化ASIC全流程设计服务专家
      </h1>
      <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
        我们提供从芯片规格制定到量产的完整解决方案，涵盖架构设计、逻辑设计、物理验证等全流程服务
      </p>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.delay-100 {
  animation-delay: 0.1s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
