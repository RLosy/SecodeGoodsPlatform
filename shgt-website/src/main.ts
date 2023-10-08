import { createApp } from 'vue';

import 'normalize.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/css/base.css';

import router from './router';
import store from './store';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
