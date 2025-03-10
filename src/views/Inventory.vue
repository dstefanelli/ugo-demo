<script setup>
import { ref, onMounted } from 'vue';
import { useInventoryStore } from '@/stores/inventory';

const inventoryStore = useInventoryStore();
const newProduct = ref('');

// Lifecycle Hooks
onMounted(() => {
  inventoryStore.fetchInventory();
});
</script>

<template>
  <div
    class="mx-auto overflow-hidden rounded-xl bg-white shadow-md mt-15 mb-15"
  >
    <div class="flex items-center justify-between p-4">
      <div>
        <a
          href="/dashboard"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >< Aller au Panneau</a
        >
      </div>
      <p class="font-bold text-md text-gray-700">Votre Inventaire</p>
    </div>
    <p
      class="font-bold text-md text-gray-700 text-center p-10"
      v-if="inventoryStore.isLoading"
    >
      Cargando inventario...
    </p>
    <ul v-else>
      <li
        class="p-4"
        v-for="(product, index) in inventoryStore.products"
        :key="index"
      >
        <div
          class="block bg-gray-500 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-400 overflow-hidden"
        >
          <div class="flex items-center">
            <div>
              <img class="w-20 h-20" :src="product.image" :alt="product.name" />
            </div>
            <div class="p-2">
              <h3 class="mb-1 font-bold tracking-tight text-white">
                {{ product.name }}
              </h3>
              <p class="font-normal text-gray-900">
                Prix {{ product.price.itemPrice }} / ({{
                  product.price.unitPrice
                }})
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
