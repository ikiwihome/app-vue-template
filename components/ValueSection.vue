<script setup>
const values = [
  '缩短产品研发周期',
  '降低技术研发成本', 
  '提高产品性能和可靠性',
  '为客户创造持续的差异化竞争优势'
]
</script>

<template>
  <section id="values" class="min-h-screen py-20 bg-gradient-to-b from-white to-light-gray">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12 animate-fade-in">
          价值体现
        </h2>

        <div class="space-y-8">
          <p class="text-lg text-gray-600 leading-relaxed animate-fade-in" style="animation-delay: 0.1s">
            我们深信，通过专业的技术服务和持续的创新，可以帮助客户实现技术突破，抢占市场先机。无论是初创企业还是行业巨头，innco都将成为最值得信赖的技术合作伙伴。我们提供从芯片规格制定到量产交付的全流程服务，确保客户获得高价值、差异化的解决方案。
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(value, index) in values"
              :key="value"
              class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              :style="`animation-delay: ${0.2 + index * 0.1}s`"
            >
              <div class="flex items-center space-x-4">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <p class="text-gray-600">
                  {{ value }}
                </p>
              </div>
            </div>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed animate-fade-in" style="animation-delay: 0.6s">
            展望未来，我们将继续保持技术敏锐度，紧跟半导体技术发展前沿，为客户提供更加智能、高效的FPGA/ASIC设计服务。innco致力于让芯片设计触手可及，创新无限可能。我们的目标是通过技术创新和专业服务，推动中国集成电路产业自主创新，为国家科技自立自强贡献力量。
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
