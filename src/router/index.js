import VueRouter from 'vue-router'
import Vue from 'vue'
import Basic from '../components/basic'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/basic'
    }, {
        path: '/basic',
        component: Basic
    }, {
        path: '/passby',
        component: () => import('../components/pass')
    }, {
        path: '/slider',
        component: () => import('../components/limit')
    }, {
        path: '/moveHandler',
        component: () => import('../components/handler')
    }, {
        path: '/multiple',
        component: () => import('../components/multiple')
    }
]

const router = new VueRouter({
    routes
})

export default router
