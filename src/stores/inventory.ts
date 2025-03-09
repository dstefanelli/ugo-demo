import { defineStore } from 'pinia'
import type { Product } from '../types/products'

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
      products: [] as Product[],
    }),
    actions: {
      addProduct(product: Product) {
        this.products.push(product);
      },
      updateProduct(id: number, updatedProduct: Product) {
        this.products[id] = updatedProduct;
      },
      deleteProduct(id: number) {
        this.products.splice(id, 1);
      },
      fetchProducts() {
        setInterval(() => {
          this.products = [...this.products];
        }, 5000);
      },
    },
  });