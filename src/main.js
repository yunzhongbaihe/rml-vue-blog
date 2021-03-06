import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import AxiosApi from './api/axios';
import store from './store/index';

import '../static/css/global.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(AxiosApi);

Vue.prototype.tokenStr = window.sessionStorage.getItem('token');
Vue.prototype.loginInfoObj = JSON.parse(window.sessionStorage.getItem('loginInfo')) || {};
Vue.prototype.getSession = () => {
    Vue.prototype.tokenStr = window.sessionStorage.getItem('token');
    Vue.prototype.loginInfoObj = JSON.parse(window.sessionStorage.getItem('loginInfo')) || {};
};

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});