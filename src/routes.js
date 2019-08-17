import Vue from 'vue'
import Router from 'vue-router'

import Home from './Views/Home.vue'
import Catalogo from './Views/Catalogo.vue'

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: Home
    },{
        path: "/catalogo",
        component: Catalogo
    }
]

export default routes;