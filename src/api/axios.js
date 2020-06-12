import axios from 'axios';
import qs from 'qs';
import {baseURL} from './config';

axios.defaults.timeout = 10000; // 设置超时请求时间
// axios.defaults.withCredentials = true; // 设置CORS跨域允许携带资源凭证

// 设置请求拦截器
axios.interceptors.request.use(config => {
    const {url} = config;
    if(!url.includes('login') && !url.includes('register')){
        config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// axios.defaluts.validateStatus = status => {
//     return /^(2|3)\d{2}$/.test(status);
// };

// 设置响应拦截器
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    let {response} = error;
    if(response){
        // 服务器返回结果
        switch(response.status){
            case 401: // 权限
                this.$message.error(response.status);
                break;
            case 403: // 服务器拒绝执行(token过期)
                this.$message.error(response.status);
                break;
            case 404: // 找不到页面
                this.$message.error(response.status);
                break;
        }
        return Promise.reject(response.status);
    }else{
        // 服务器未返回结果
        if(!window.navigator.onLine){
            this.$message.error('哦吼，断网了');
            return;
        }
        return Promise.reject(error);
    }
});

const axiosApi = (method = 'get', url, params = {}) => {
    let httpDefault = {
        method: method,
        baseURL: baseURL,
        url: url,
        params: (method === 'get' || method === 'delete' ? params : null),
        data: (method === 'post' || method === 'put' ? qs.stringify(params) : null),
        timeout: 10000,
    };
    
    return new Promise((resolve, reject) => {
        axios(httpDefault).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
};

export default {
    install: Vue => {
        Vue.prototype.$getAxios = (url, params) => axiosApi('get', url, params);
        Vue.prototype.$postAxios = (url, params) => axiosApi('post', url, params);
    }
}