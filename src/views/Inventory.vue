<script setup>
import { ref } from 'vue';
import { useInventoryStore } from '@/stores/inventory';

const inventoryStore = useInventoryStore();
const newProduct = ref('');

const addProduct = () => {
  if (newProduct.value.trim()) {
    inventoryStore.addProduct({
      id: 1,
      name: newProduct.value,
      category: 'default',
      price: 0,
      inStock: true,
    });
    newProduct.value = '';
  }
};
</script>

<template>
  <div class="mx-auto overflow-hidden rounded-xl bg-white shadow-md">
    <h1>Inventario</h1>
    <div>
      <a href="/dashboard" class="text-green-700">Ir a Dashboard</a>
    </div>
    <input v-model="newProduct" placeholder="Nombre del producto" />
    <button @click="addProduct">Agregar</button>
    <ul>
      <li v-for="(product, index) in inventoryStore.products" :key="index">
        {{ product.name }}
        <button @click="inventoryStore.deleteProduct(product.id)">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>
