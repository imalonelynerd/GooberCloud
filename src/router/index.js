import {createRouter, createWebHistory} from 'vue-router'
import GooberPage from "@/pages/GooberPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `/`,
            name: 'Root',
            redirect: '/home'
        },
        {
            path: `/error`,
            name: 'Error',
            component: ErrorPage
        },
        {
            path: `/:page`,
            name: 'Page',
            component: GooberPage
        },
        {
            path: `/:page/:pathMatch(.*)*`,
            name: 'Too Much',
            redirect: '/error'
        }
    ]
})
