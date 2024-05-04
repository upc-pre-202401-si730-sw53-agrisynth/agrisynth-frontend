import { createRouter, createWebHistory } from 'vue-router'
import TerrainsComponent from "@/views/terrains.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', components: TerrainsComponent},
    {path: '/terrains', components: TerrainsComponent},
  ],
})

export default router
