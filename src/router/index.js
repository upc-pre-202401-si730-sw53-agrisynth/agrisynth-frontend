import {createRouter, createWebHistory} from "vue-router";
import TerrainsComponent from "@/views/terrains.component.vue";
import ResourcesComponent from "@/views/resources.component.vue";
import MachinerysComponent from "@/views/machinerys.component.vue";
import HomePage from "@/views/collaboration.component.vue";
import EditUserPage from "@/collaboration/pages/edit-user.component.vue";
import AddUserPage from "@/collaboration/pages/add-user.component.vue";
import UserDetailsPage from "@/collaboration/pages/user-detail.component.vue";

import account from "../views/account.component.vue";
import Register from '@/account/pages/register.component.vue';
import SignIn from '@/account/pages/sign_in.component.vue';
import Recover from '@/account/pages/recover_password.component.vue';
import Subscription from '@/account/pages/subscription.component.vue';
import CreatePassword from '@/account/pages/create_password.component.vue';
import AuthenticationView from '@/account/pages/autentication_view.component.vue';

import Support from '@/support/pages/support.component.vue';
import Settings from '@/configuration/pages/configuration.component.vue'


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
        {path: '/account', component: account,
            children: [
                {path: '', component: AuthenticationView},
                {path: 'authentication', component: AuthenticationView},
                {path: 'register', component: Register},
                {path: 'sign-in', component: SignIn},
                {path: 'recover-password', component: Recover},
                {path: 'subscription', component: Subscription},
                {path: 'create-password', component: CreatePassword}
            ],
        },

        {path: '/support', component: Support},
        {path: '/settings', component: Settings}

    ],
});

export default router;
