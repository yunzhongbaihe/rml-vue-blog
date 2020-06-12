import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'nav_active',
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Login'),
            meta: {showHeaderbar: false},
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Register'),
            meta: {showHeaderbar: false},
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Index'),
            meta: {showHeaderbar: true},
        },
        {
            path: '/timeaxis',
            name: 'Timeaxis',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Timeaxis'),
            meta: {showHeaderbar: true},
        },
        {
            path: '/books',
            name: 'Books',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Books'),
            children: [
                {path: 'info/:id', component: () => import(/* webpackChunkName: "group-foo" */ '@/components/BookInfo')}
            ],
            meta: {showHeaderbar: true},
        },
        {
            path: '/workbench',
            name: 'Workbench',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Workbench'),
            redirect: '/workbench/welcome',
            children: [
                {
                    path: '/workbench/welcome',
                    name: 'Welcome',
                    component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Welcome')
                },
                {
                    path: '/workbench/users',
                    name: 'Users',
                    component: () => import(/* webpackChunkName: "group-foo" */ '@/components/user/Users')
                },
                {
                    path: '/workbench/power',
                    name: 'Powers',
                    component: () => import(/* webpackChunkName: "group-foo" */ '@/components/power/Powers')
                },
            ],
            meta: {showHeaderbar: false},
        },
    ]
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    if(to.path === '/login') return next();
    const tokenStr = window.sessionStorage.getItem('token');
    // 如果是去工作台，但是没有登录的情况下，跳转至登录页
    // if(!tokenStr && to.path === '/workbench') return next('/login');
    next();
});

export default router;