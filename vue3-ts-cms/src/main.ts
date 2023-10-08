import { createApp } from 'vue';
import 'normalize.css';
import './assets/css/base.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8001/';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router/index';
import store from './store/index';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
