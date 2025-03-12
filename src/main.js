import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {router_data} from "@/store/data/route-data.js";
import {createPinia} from "pinia";

const router = createRouter({
    history: createWebHistory(),
    routes: router_data
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app')
