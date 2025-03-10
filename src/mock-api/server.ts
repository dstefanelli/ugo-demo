import { createServer } from 'miragejs';
import * as userData from '@/mock-api/data/user.json';
import * as inventoryData from '@/mock-api/data/products.json';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    routes() {
      this.get('/api/user', () => {
        return userData;
      });

      this.get('/api/inventory', () => {
        return inventoryData;
      });
    },
  });
}
