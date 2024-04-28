import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Card from "primevue/card";




const app = createApp(App)

app.use(router)
app.mount('#app')
app.component('pv-card', Card)