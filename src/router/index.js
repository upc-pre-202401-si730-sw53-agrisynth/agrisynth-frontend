import {createRouter, createWebHistory} from "vue-router";
import TerrainsComponent from "@/views/terrains.component.vue";
import ResourcesComponent from "@/views/resources.component.vue";
import MachinerysComponent from "@/views/machinerys.component.vue";
import CollaborationComponent from "@/views/collaboration.component.vue";
import DocumentsComponent from "@/views/documents.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: TerrainsComponent},
        {path: "/terrains", component: TerrainsComponent},
        {path: "/resources", component: ResourcesComponent},
        {path: '/machinarys', component: MachinerysComponent},
        {path: '/collaboration', component: CollaborationComponent},
        {path: '/documents', component: DocumentsComponent}

    ],
});

export default router;
