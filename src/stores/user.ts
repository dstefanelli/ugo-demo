import { defineStore } from 'pinia';
import { computed } from 'vue';
import axios from 'axios';
import type { User } from '../types/user';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async fetchUser() {
      try {
        const response = await axios.get('/api/user');
        this.user = response.data;
      } catch (error) {
        console.error('Error trying to fetch user profile:', error);
      }
    },
  },
  getters: {
    userName: (state) => computed(() => state.user?.name ?? 'Cargando...'),
    userEmail: (state) => computed(() => state.user?.email ?? 'Cargando...'),
    userLocation: (state) =>
      computed(() => state.user?.location ?? 'Cargando...'),
    userImage: (state) => computed(() => state.user?.image ?? 'Cargando...'),
  },
});
