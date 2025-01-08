<script setup>

const culture = {
  mission: {
    title: '使命',
    content: '以卓越的技术服务赋能客户创新，共同打造智能电子产业新生态',
    icon: 'moon'
  },
  vision: {
    title: '愿景',
    content: '打造国际领先的半导体技术创新平台，实现芯片设计服务的全球化',
    icon: 'sun'
  },
  values: {
    title: '价值观',
    content: [
      '技术至上',
      '客户为先',
      '持续创新'
    ],
    icon: 'heart'
  }
}
</script>

<template>
  <section id="culture" class="min-h-screen py-20 bg-light-gray">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12 animate-fade-in">
        关于我们
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(item, key) in culture"
          :key="key"
          class="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
          :style="`animation-delay: ${key === 'mission' ? 0.1 : key === 'vision' ? 0.2 : 0.3}s`"
        >
          <div class="text-4xl text-primary mb-4">
            <Icon :name="item.icon.charAt(0).toUpperCase() + item.icon.slice(1)" />
          </div>
          <h3 class="text-xl font-bold text-dark-gray mb-4">
            {{ item.title }}
          </h3>
          
          <template v-if="Array.isArray(item.content)">
            <ul class="space-y-2">
              <li 
                v-for="(value, index) in item.content"
                :key="index"
                class="text-gray-600"
              >
                {{ value }}
              </li>
            </ul>
          </template>
          <p v-else class="text-gray-600">
            {{ item.content }}
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
