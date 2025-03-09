<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Dashboard from '@/views/Dashboard.vue';
</script>

<template>
  <Header />
  <main class="page__wrapper">
    <Dashboard userName="Hello Vue 3 + Vite" />
  </main>
  <Footer />
</template>
