import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../components/Catalog.vue'
import Card from '../components/Card.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Catalog',
            component: Catalog,
        },
        {
            path: '/card',
            name: 'Card',
            component: Card,
            props: true,
        }
    ]
})

export default router