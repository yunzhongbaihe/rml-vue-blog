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

// 打印插件
import Print from 'vue-print-nb';
Vue.use(Print);

Vue.prototype.tokenStr = window.sessionStorage.getItem('token');
Vue.prototype.getSession = () => {
  Vue.prototype.tokenStr = window.sessionStorage.getItem('token');
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
