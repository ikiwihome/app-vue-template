<script setup>
const advantages = [
  {
    title: '顶尖人才团队',
    description: '拥有来自国内外知名半导体企业和研究机构的资深专家，平均拥有15年以上的行业经验',
    icon: 'ph:users'
  },
  {
    title: '先进技术平台',
    description: '投资建设国际领先的EDA工具和硬件仿真环境，配备多套专业的设计和验证系统',
    icon: 'ph:circuitry'
  },
  {
    title: '灵活定制服务',
    description: '根据不同行业和客户的独特需求，提供高度定制化的设计解决方案',
    icon: 'ph:gear'
  },
  {
    title: '全程技术支持',
    description: '从初期需求沟通到最终量产交付，提供全方位、高质量的技术支持和项目管理',
    icon: 'ph:handshake'
  }
]
</script>

<template>
  <section id="advantages" class="min-h-screen py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12 animate-fade-in">
        核心优势
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(advantage, index) in advantages"
          :key="advantage.title"
          class="p-8 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-light-gray/50 transition-all duration-300 animate-fade-in"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div class="text-4xl text-primary mb-4">
            <Icon :name="advantage.icon" />
          </div>
          <h3 class="text-xl font-bold text-dark-gray mb-2">
            {{ advantage.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ advantage.description }}
          </p>
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
