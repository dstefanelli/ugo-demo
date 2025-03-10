<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

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

const userStore = useUserStore();
const orders = ref(2);
const lastUpdated = ref('2 heures');
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

onMounted(() => {
  userStore.fetchUser();
});
</script>

<template>
  <div class="mx-auto overflow-hidden rounded-xl bg-white shadow-md">
    <div class="p-10">
      <img
        class="w-20 h-20 rounded-full"
        :src="userStore.userImage.value"
        :alt="userStore.userName.value"
      />
      <div class="flex items-center justify-between mt-4">
        <div class="text-gray-700">
          <p>
            Bienvenue <strong>{{ userStore.userName }}</strong> sur votre
            tableau de bord <strong>UgoFresh</strong>.
          </p>
          <p>De {{ userStore.userLocation }}</p>
        </div>
        <div>
          <a
            href="/inventory"
            class="font-medium text-blue-800 hover:underline"
          >
            aller à l'inventaire ></a
          >
        </div>
      </div>

      <div class="mt-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-700">
              Commandes récentes
            </h2>
            <p class="text-gray-600">
              Commandes des dernières 24 heures: <strong>{{ orders }}</strong>
            </p>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-gray-700">
              Informations sur l'utilisateur
            </h2>
            <p class="text-gray-600">
              Dernière mise à jour: <strong>{{ lastUpdated }}</strong>
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
