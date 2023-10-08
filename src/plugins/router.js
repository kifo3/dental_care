import {createRouter, createWebHistory} from "vue-router";
import InfoPage from "@/pluss/InfoPage";

const routes = [
    {
        path: '/',
        component: InfoPage
    },
    {
        path: '/login',
        component: () => import('../pluss/LogIn')
    },
    {
        path: '/signin',
        component: () => import('../pluss/SignIn')
    },
    {
        path: '/make_appointment',
        component: () => import('../pluss/MakeAppointment')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})