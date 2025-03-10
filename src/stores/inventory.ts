import { defineStore } from 'pinia';
import type { Product } from '../types/products';
import axios from 'axios';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
  }),
  actions: {
    async fetchInventory() {
      this.isLoading = true;
      try {
        const response = await axios.get('/api/inventory');
        this.products = response.data.hits.map((item: any, index: number) => ({
          id: index,
          name: item.name,
          image: item.image,
          category: item.category,
          price: {
            itemPrice: item.priceInfo.itemPrice,
            linePrice: item.priceInfo.linePrice,
            linePriceDisplay: item.priceInfo.linePriceDisplay,
            unitPrice: item.priceInfo.unitPrice,
            isB2BPrice: item.priceInfo.isB2BPrice,
          },
          shortDescription: item.shortDescription,
        }));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.isLoading = false;
      }
    },
    addProduct(product: Product) {
      this.products.push(product);
    },
    deleteProduct(id: number) {
      this.products.splice(id, 1);
    },
  },
});
