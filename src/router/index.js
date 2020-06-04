import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => ('<div>dddd</div>')
        },
        {
            path: '/timeaxis',
            name: 'timeaxis',
            component: () => import('@/components/Timeaxis')
        }
    ]
});