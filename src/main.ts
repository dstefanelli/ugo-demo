import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { makeServer } from '@/mock-api/server';
import router from '@/router';
import './style.css';
import App from '@/App.vue';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
