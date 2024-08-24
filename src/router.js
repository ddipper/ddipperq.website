import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import About from './components/About.vue';
import Links from './components/Links.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'Home',component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/links', name: 'Links', component: Links}
    ]
    }
)

export default router