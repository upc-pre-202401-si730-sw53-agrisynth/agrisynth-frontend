import { createRouter, createWebHistory } from 'vue-router'

import TerrainsComponent from "@/views/terrains.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: TerrainsComponent},
    {path: '/terrains', component: TerrainsComponent},
  ],
})

export default router
