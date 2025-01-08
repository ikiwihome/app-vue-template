<script setup>
</script>

<template>
  <section id="about" class="min-h-screen py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image Section -->
        <div class="relative h-96 rounded-lg overflow-hidden animate-fade-in-left">
          <img 
            src="/images/about.jpg" 
            alt="About INNCO"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <!-- Content Section -->
        <div class="space-y-6 animate-fade-in-right">
          <h2 class="text-3xl md:text-4xl font-bold text-dark-gray">
            关于INNCO
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            上海盈科数通微电子有限公司（INNCO）是一家综合性ASIC芯片整体解决方案提供商，公司致力于在通信、汽车电子、人工智能、高性能计算、消费电子等领域为客户提供定制化芯片全流程设计服务、IP定制及授权、芯片设计平台解决方案、芯片量产服务、技术咨询等。
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            公司成立于2024年，总部位于上海。核心成员多来自行业知名企业，平均超过15年从业经验，曾设计并量产多款复杂SOC芯片，涉及28nm、16nm、12nm、7nm等先进制程工艺。INNCO拥有一整套成熟的设计流程和开发平台，确保客户可以更快、更优、更省的获得高价值、差异化产品及服务。
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <h3 class="text-xl font-semibold text-primary">15+ 年</h3>
              <p class="text-gray-600">行业经验</p>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold text-primary">7nm</h3>
              <p class="text-gray-600">先进制程</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
