import Vue from 'vue';
import App from './App.vue';

//引入状态管理store,找下面的index.js
import store from "./store"  

// //引入全局loading组件
// import loading from './loading';
// Vue.use(loading);

//引入axios
import axios from "axios";
//全局配置携带跨源凭证
axios.defaults.withCredentials=true;  
Vue.prototype.$http=axios;

// 请求之前  拦截器，显示loading
axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading');
  return config;//config会在你拦截之后，继续请求
}, function (error) {
  return Promise.reject(error);//交给了catch处理
});

// 数据响应回来时做一个拦截，隐藏loading.....
axios.interceptors.response.use(function (response) {
  setTimeout(function(){
    store.dispatch('hideLoading');
  },500);
 
  return response;//给axios的then处理
}, function (error) {
  return Promise.reject(error);
});


//链接路由
import VueRouter from "vue-router";
Vue.use(VueRouter);  //安装路由
import routes from "./router.config.js"; //引入路由
const router = new VueRouter(routes); //创建路由实例

//引入全局过滤器
import filters from "./filters";
import { setTimeout } from 'timers';
// console.log(filters);
/* for(var key in filters){
  Vue.filter(key,filters[key]);
} */
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));


//全局引入vue2-swiper
/* import vue2swiper from "vue2-swiper"
Vue.use(vue2swiper); */

import "animate.css"

new Vue({
  el: '#app',
  router, //注册路由
  store,//注册状态管理
  render: h => h(App)
})
