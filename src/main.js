import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import router from './router'


import Card from "primevue/card";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

import Toolbar from "primevue/toolbar";
import Avatar from "primevue/avatar";

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';



const app = createApp(App)

app.use(PrimeVue, router, {ripple: true})
app.component('pv-card', Card)
app.component('pv-button', Button)
app.component('pv-dialog', Dialog)
app.component('pv-input-text', InputText)
app.mount('#app')
