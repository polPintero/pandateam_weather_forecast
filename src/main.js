import './styles/main.css';

import { createApp } from 'vue';
import router from './router';
import store from './store/index.js';
import App from './App.vue';

import i18n from './i18n/i18n';

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(store);
app.mount('#app');
