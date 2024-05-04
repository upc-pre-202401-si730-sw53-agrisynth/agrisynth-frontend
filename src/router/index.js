import {createRouter, createWebHistory} from "vue-router";
import TerrainsComponent from "@/views/terrains.component.vue";
import ResourcesComponent from "@/views/resources.component.vue";
import MachinerysComponent from "@/views/machinerys.component.vue";
import HomePage from "@/views/collaboration.component.vue";
import EditUserPage from "@/collaboration/pages/edit-user.component.vue";
import AddUserPage from "@/collaboration/pages/add-user.component.vue";
import UserDetailsPage from "@/collaboration/pages/user-detail.component.vue";

import account from "../views/account.component.vue";
import Register from '@/components/start_screen/autentication/register/register.component.vue';
import SignIn from '@/components/start_screen/autentication/sign_in/sign_in.component.vue';
import Recover from '@/components/start_screen/password/recover_password.component.vue';
import Subscription from '@/components/start_screen/subscription/subscription.component.vue';
import CreatePassword from '@/components/start_screen/autentication/register/create_password.component.vue';
import AuthenticationView from '@/components/start_screen/autentication/autentication_view.component.vue';

import Support from '@/components/support/support.component.vue';
import Settings from '@/components/configuration/configuration.component.vue'


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
