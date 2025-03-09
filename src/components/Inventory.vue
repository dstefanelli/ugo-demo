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
                inStock: true 
            });
            newProduct.value = '';
        }
    };
</script>

<template>
    <div>
        <h1>Inventario</h1>
        <input v-model="newProduct" placeholder="Nombre del producto" />
        <button @click="addProduct">Agregar</button>
        <ul>
        <li v-for="(product, index) in inventoryStore.products" :key="index">
            {{ product.name }}
            <button @click="inventoryStore.deleteProduct(product.id)">Eliminar</button>
        </li>
        </ul>
    </div>
</template>