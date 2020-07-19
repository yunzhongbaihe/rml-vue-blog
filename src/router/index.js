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
			component: () => import(/* webpackChunkName: "group-login" */ '@/components/Login'),
			meta: {showHeaderbar: false},
		},
		{
			path: '/register',
			name: 'Register',
			component: () => import(/* webpackChunkName: "group-register" */ '@/components/Register'),
			meta: {showHeaderbar: false},
		},
		{
			path: '/findpwd',
			name: 'Findpwd',
			component: () => import(/* webpackChunkName: "group-register" */ '@/components/Findpwd'),
			meta: {showHeaderbar: false},
		},
		{
			path: '/index',
			name: 'Index',
			component: () => import(/* webpackChunkName: "group-index" */ '@/components/Index'),
			meta: {showHeaderbar: true},
		},
		{
			path: '/timeaxis',
			name: 'Timeaxis',
			component: () => import(/* webpackChunkName: "group-timeaxis" */ '@/components/Timeaxis'),
			meta: {showHeaderbar: true},
		},
		{
			path: '/books',
			name: 'Books',
			component: () => import(/* webpackChunkName: "group-books" */ '@/components/Books'),
			children: [
				{
					path: 'info/:id',
					component: () => import(/* webpackChunkName: "group-books" */ '@/components/BookInfo'),
					meta: {showHeaderbar: true},
				}
			],
			meta: {showHeaderbar: true},
		},
		{
			path: '/workbench',
			name: 'Workbench',
			component: () => import(/* webpackChunkName: "group-workbench" */ '@/components/Workbench'),
			redirect: '/workbench/welcome',
			children: [
				{
					path: '/workbench/welcome',
					name: 'Welcome',
					component: () => import(/* webpackChunkName: "group-workbench" */ '@/components/Welcome')
				},
				{
					path: '/workbench/users',
					name: 'Users',
					component: () => import(/* webpackChunkName: "group-workbench" */ '@/components/user/Users')
				},
				{
					path: '/workbench/power',
					name: 'Powers',
					component: () => import(/* webpackChunkName: "group-workbench" */ '@/components/power/Powers')
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

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location){
	return originalPush.call(this, location).catch(err => err);
};

export default router;