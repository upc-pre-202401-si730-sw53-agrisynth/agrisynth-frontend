import { createRouter, createWebHistory } from 'vue-router'
import TerrainsComponent from "@/views/terrains.component.vue";
import MachinerysComponent from "@/views/machinerys.component.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: TerrainsComponent},
    {path: '/terrains', component: TerrainsComponent},
    {path: '/machinarys', component: MachinerysComponent},

  ],
})

export default router
