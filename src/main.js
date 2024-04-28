import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import router from './router'


import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Avatar from "primevue/avatar";

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';



const app = createApp(App)

app.use(PrimeVue, router, {ripple: true})
app.component('pv-card', Card)
app.mount('#app')
