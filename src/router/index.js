import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'nav_active',
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Index'),
            meta: {keepAlive: false},
        },
        {
            path: '/timeaxis',
            name: 'Timeaxis',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Timeaxis'),
            meta: {keepAlive: true},
        },
        {
            path: '/books',
            name: 'Books',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Books'),
            children: [
                {path: 'info/:id', component: () => import(/* webpackChunkName: "group-foo" */ '@/components/BookInfo')}
            ],
            meta: {keepAlive: false},
        }
    ]
});