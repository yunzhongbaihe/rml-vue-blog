import Vue from 'vue';
import Router from 'vue-router';
import fa from "element-ui/src/locale/lang/fa";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'nav_active',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Login'),
            meta: {keepAlive: false, showHeaderbar: false},
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Index'),
            meta: {keepAlive: false, showHeaderbar: true},
        },
        {
            path: '/timeaxis',
            name: 'Timeaxis',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Timeaxis'),
            meta: {keepAlive: true, showHeaderbar: true},
        },
        {
            path: '/books',
            name: 'Books',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Books'),
            children: [
                {path: 'info/:id', component: () => import(/* webpackChunkName: "group-foo" */ '@/components/BookInfo')}
            ],
            meta: {keepAlive: false, showHeaderbar: true},
        }
    ]
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    if(to.path === '/login') return next();
    const tokenStr = window.sessionStorage.getItem('token');
    if(!tokenStr) return next('/login');
    next();
});

export default router;