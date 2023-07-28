import {createRouter, createWebHistory} from 'vue-router';

import HomeComponent from './pages/Home.vue';
import LoginComponent from './pages/Login.vue';

const routes = [
    {
        name:"Home",
        path:"/",
        component:HomeComponent
    },
    {
        name:"Login",
        path:"/login",
        component:LoginComponent
    }
];
 
const router = createRouter({
    history: createWebHistory(),
    routes
}); 

export default router;