<script setup lang="ts">
import Inventory from './Inventory.vue';
import { ref } from 'vue';

const props = defineProps<{ userName: string }>();

const userName = ref(props.userName);
</script>

<template>
  <div
    class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
  >
    <h1>Bienvenido {{ userName }}</h1>
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <p class="text-gray-700">Bienvenido al panel de control de UgoFresh.</p>
    <div class="mt-4 p-4 bg-white shadow-md rounded-lg">
      <h2 class="text-lg font-semibold">Últimas actualizaciones</h2>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Nuevo sistema de inventario en tiempo real implementado.</li>
        <li>
          Optimización en la gestión de pedidos para una mayor eficiencia.
        </li>
        <li>Mejoras en la interfaz de usuario para facilitar la navegación.</li>
      </ul>
    </div>
    <div class="mt-4 p-4 bg-white shadow-md rounded-lg">
      <h2 class="text-lg font-semibold">Resumen de actividad</h2>
      <p class="text-gray-600">En las últimas 24 horas:</p>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Se han registrado 23 nuevos pedidos.</li>
        <li>El inventario se ha actualizado con 15 nuevos productos.</li>
        <li>Se han realizado 8 entregas exitosas.</li>
      </ul>
    </div>
    <Inventory />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
