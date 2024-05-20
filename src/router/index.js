import {createRouter, createWebHistory} from "vue-router";
import TerrainsComponent from "@/views/terrains.component.vue";
import ResourcesComponent from "@/views/resources.component.vue";
import MachinerysComponent from "@/views/machinerys.component.vue";
import HomePage from "@/views/collaboration.component.vue";
import EditUserPage from "@/collaboration/pages/edit-user.component.vue";
import AddUserPage from "@/collaboration/pages/add-user.component.vue";
import UserDetailsPage from "@/collaboration/pages/user-detail.component.vue";
import TestView from "@/team-management/pages/test.view.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: TerrainsComponent},
        {path: "/terrains", component: TerrainsComponent},
        {path: "/resources", component: ResourcesComponent},
        {path: '/machinarys', component: MachinerysComponent},
        { path: '/members', component: HomePage },
        { path: '/member/add', component: AddUserPage },
        { path: '/member/edit/:id', component: EditUserPage, props: true },
        { path: '/member/:id', component: UserDetailsPage, props: true },
        {path: '/test', component: TestView}

    ],
});

export default router;
