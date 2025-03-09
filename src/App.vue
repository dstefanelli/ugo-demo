<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Dashboard from '@/views/Dashboard.vue';
import Inventory from './views/Inventory.vue';
</script>

<template>
  <Header />
  <main class="page__wrapper">
    <router-view />
  </main>
  <Footer />
</template>
