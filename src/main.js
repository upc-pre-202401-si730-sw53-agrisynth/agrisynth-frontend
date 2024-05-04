import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";




import Card from "primevue/card";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Image from 'primevue/image';
import Fieldset from "primevue/fieldset";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";


import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



createApp(App).use(router)
    .use(PrimeVue, { ripple: true })
    .component('pv-input-text', InputText)
    .component('pv-dialog', Dialog)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-icon-field', IconField)
    .component('pv-icon', InputIcon)
    .component('pv-fieldset', Fieldset)
    .component('pv-image', Image)
    .mount('#app')