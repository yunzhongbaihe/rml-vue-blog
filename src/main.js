import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import AxiosApi from './api/axios';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(AxiosApi);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});