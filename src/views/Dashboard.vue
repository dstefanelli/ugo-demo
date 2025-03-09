<script setup lang="ts">
import { ref } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const userName = ref('Thomas');
const orders = ref(23);
const lastUpdated = ref('Hace 2 horas');
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Bons de commande',
      backgroundColor: '#07b69b',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      offset: true,
      beginAtZero: true,
      max: 100,
      grid: {
        color: '#364153',
      },
      border: {
        dash: [3, 3],
      },
    },
  },
  elements: {
    point: {
      radius: 3,
    },
  },
};
</script>

<template>
  <div class="mx-auto overflow-hidden rounded-xl bg-white shadow-md">
    <div class="p-10">
      <p class="font-bold text-sm text-gray-700">Dashboard</p>
      <div class="flex items-center justify-between mt-4">
        <p class="text-gray-700">
          Bienvenido {{ userName }} a tu panel de control de UgoFresh.
        </p>
        <div>
          <a href="/inventory" class="text-green-700">Ir a Inventario</a>
        </div>
      </div>

      <div class="mt-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold">Pedidos Recientes</h2>
            <p class="text-gray-600">
              Pedidos en las últimas 24 horas: <strong>{{ orders }}</strong>
            </p>
          </div>
          <div>
            <h2 class="text-lg font-semibold">Información del Usuario</h2>
            <p class="text-gray-600">
              Última actualización: <strong>{{ lastUpdated }}</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-4">
        <div style="height: 347px; position: relative; width: 100%">
          <Line id="ordersChart" :data="data" :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
