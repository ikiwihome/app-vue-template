<script setup>
const applications = [
  {
    title: '通信',
    description: '为5G/6G通信网络提供高性能、低功耗的ASIC芯片解决方案，支持大规模MIMO和毫米波技术',
    image: '/images/1706024117170.jpg'
  },
  {
    title: '汽车电子',
    description: '开发符合AEC-Q100标准的车规级芯片，支持ADAS、智能座舱和车联网应用',
    image: '/images/20220818021429343.jpg'
  },
  {
    title: '高性能计算',
    description: '为AI训练和推理提供定制化计算芯片，支持大规模并行计算和高效能比架构',
    image: '/images/ai model.webp'
  },
  {
    title: '数据中心',
    description: '优化数据中心能效，提供高性能计算芯片和智能网络加速解决方案',
    image: '/images/1712485238636.jpg'
  }
]
</script>

<template>
  <section id="applications" class="min-h-screen py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12 animate-fade-in">
        行业应用
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(application, index) in applications"
          :key="application.title"
          class="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <img 
            :src="application.image"
            :alt="application.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/70"></div>
          
          <div class="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ application.title }}
            </h3>
            <p class="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ application.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
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
