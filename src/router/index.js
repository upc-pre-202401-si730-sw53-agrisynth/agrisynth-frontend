import {createRouter, createWebHistory} from "vue-router";
import TerrainsComponent from "@/views/terrains.component.vue";
import ResourcesComponent from "@/views/resources.component.vue";
import MachineryComponent from "@/views/machinerys.component.vue";
import CollaborationComponent from "@/views/collaboration.component.vue";
import DocumentsComponent from "@/views/documents.component.vue";
import account from "@/views/account.component.vue";
import AuthenticationView from "@/account/pages/account.component.vue";
import Register from "@/account/pages/register.component.vue";
import SignIn from "@/account/pages/sign_in.component.vue";
import Recover from "@/account/pages/recover_password.component.vue";
import Subscription from "@/account/pages/subscription.component.vue";
import CreatePassword from "@/account/pages/create_password.component.vue";
import Support from "@/public/pages/support.component.vue";
import Settings from "@/configuration/pages/configuration.component.vue";
import NotFoundComponent from "@/public/pages/not-found-component.vue";
import {authenticationGuard} from "@/iam/services/authentication.guard.js";
import SignInComponent from "@/iam/pages/sign-in.component.vue";
import SignUpComponent from "@/iam/pages/sign-up.component.vue";
import HomeComponent from "@/public/pages/welcome.component.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: TerrainsComponent},
        {path: "/terrains", component: TerrainsComponent},
        {path: "/resources", component: ResourcesComponent},
        {path: '/machinery', component: MachineryComponent},
        {path: '/collaboration', component: CollaborationComponent},
        {path: '/documents', component: DocumentsComponent},

        { path: '/sign-in', name: 'sign-in',    component: SignInComponent},
        { path: '/sign-up', name: 'sign-up',    component: SignUpComponent},

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

        {path: '/welcome', component: HomeComponent},
        {path: '/support', component: Support},
        {path: '/settings', component: Settings},

        {path: '/:pathMatch(.*)*', component: NotFoundComponent}
    ],
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Agrisynth';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    // Call the authentication guard
    authenticationGuard(to, from, next);
});

export default router;
