<script setup lang="ts">
import Header from '~/components/Header.vue'
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import AdvantagesSection from '~/components/AdvantagesSection.vue'
import ValueSection from '~/components/ValueSection.vue'
import ApplicationsSection from '~/components/ApplicationsSection.vue'
import CultureSection from '~/components/CultureSection.vue'
import ContactSection from '~/components/ContactSection.vue'
</script>

<template>
  <div class="scroll-smooth">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <ValueSection />
      <ApplicationsSection />
      <CultureSection />
      <ContactSection />
    </main>
  </div>
</template>
