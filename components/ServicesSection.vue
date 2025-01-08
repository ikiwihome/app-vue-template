<script setup>
const services = [
  {
    title: '芯片设计全流程服务',
    description: '从逻辑架构到版图实现的全景设计服务，确保高性能、高可靠性',
    image: '/images/abstract-1963884_1920.jpg',
    details: [
      '架构设计',
      '逻辑设计', 
      '原型验证',
      '后端设计',
      '物理验证',
      '封装设计',
      '封装测试'
    ]
  },
  {
    title: '设计平台解决方案',
    description: '整合EDA工具、IP资源和创新设计方法，显著缩短研发周期',
    image: '/images/abstract-1438441_1920.png',
    details: [
      '人工智能解决方案',
      '汽车电子解决方案',
      '消费电子解决方案',
      '工业控制解决方案'
    ]
  },
  {
    title: '量产服务',
    description: '全链条芯片量产服务，确保卓越的性能和可靠性标准',
    image: '/images/6526dc79dea0f080d2d61d6f_Starting-with-large-language-models.webp',
    details: [
      '晶圆制造',
      '封装测试',
      '产品认证',
      '失效分析',
      '2.5D/3D封装',
      'SI/PI仿真'
    ]
  }
]
</script>

<template>
  <section id="services" class="min-h-screen py-20 bg-light-gray">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12 animate-fade-in">
        服务领域
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <img 
            :src="service.image"
            :alt="service.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60"></div>
          
          <div class="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ service.title }}
            </h3>
            <p class="text-gray-200 mb-4">
              {{ service.description }}
            </p>
            
            <div class="absolute inset-0 p-6 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 class="text-xl font-semibold text-dark-gray mb-4">
                服务内容
              </h4>
              <ul class="space-y-2">
                <li 
                  v-for="detail in service.details"
                  :key="detail"
                  class="text-gray-600"
                >
                  {{ detail }}
                </li>
              </ul>
            </div>
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
