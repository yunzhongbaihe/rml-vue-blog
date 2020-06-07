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
            name: 'Timeaxis',
            component: () => import('@/components/Timeaxis')
        },
        {
            path: '/books',
            name: 'Books',
            component: () => import('@/components/Books'),
            children: [
                {path: 'info/:id', component: () => import('@/components/BookInfo')}
            ]
        }
    ]
});