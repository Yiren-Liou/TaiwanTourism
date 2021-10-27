import { createApp } from 'vue';
import Vuex from 'vuex';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(Vuex);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app');
