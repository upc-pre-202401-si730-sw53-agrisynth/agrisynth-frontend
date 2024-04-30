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
import Divider from "primevue/divider";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Image from 'primevue/image';
import Fieldset from "primevue/fieldset";
import Toolbar from "primevue/toolbar";
import Avatar from "primevue/avatar";

import FloatLabel from "primevue/floatlabel";

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';



const app = createApp(App)

app.use(PrimeVue, {ripple: true})
app.use(router)
app.component('pv-card', Card)
app.component('pv-button', Button)
app.component('pv-dialog', Dialog)
app.component('pv-input-text', InputText)
app.component('pv-divider', Divider)
app.component('pv-splitter', Splitter)
app.component('pv-splitter-panel', SplitterPanel)
app.component('pv-image', Image)
app.component('pv-fieldset', Fieldset)

app.component('pv-float-label', FloatLabel)

app.mount('#app')
