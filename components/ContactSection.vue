<script setup>

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validate = () => {
  errors.value = {}
  
  if (!form.value.name) {
    errors.value.name = '请输入您的姓名'
  }
  
  if (!form.value.email) {
    errors.value.email = '请输入您的邮箱'
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = '请输入有效的邮箱地址'
  }
  
  if (!form.value.message) {
    errors.value.message = '请输入您的需求'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return
  
  isSubmitting.value = true
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    isSubmitted.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('提交失败:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="min-h-screen py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12 animate-fade-in">
        联系我们
      </h2>

      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- 联系表单 -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                :class="{ 'border-red-500': errors.name }"
              />
              <p v-if="errors.name" class="mt-2 text-sm text-red-600">
                {{ errors.name }}
              </p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">邮箱</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="mt-2 text-sm text-red-600">
                {{ errors.email }}
              </p>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">需求</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-2 text-sm text-red-600">
                {{ errors.message }}
              </p>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">提交中...</span>
                <span v-else>提交</span>
              </button>
            </div>

            <div v-if="isSubmitted" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
              提交成功！我们会尽快与您联系。
            </div>
          </form>
        </div>

        <!-- 企业邮箱 -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-dark-gray">企业邮箱</h3>
            <p class="text-gray-600">
              如有任何问题，欢迎通过以下邮箱联系我们：
            </p>
            <div class="flex items-center space-x-4">
              <div class="text-2xl text-primary">
                <Icon name="famicons:mail-outline" />
              </div>
              <a 
                href="mailto:business@innco.cc"
                class="text-lg text-primary hover:text-primary-dark"
              >
                business@innco.cc
              </a>
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
