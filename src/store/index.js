import Vue from "vue"  //引入vue框架
import Vuex from "vuex";//引入状态管理
Vue.use(Vuex);   //安装vuex

//引入状态角色
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";

//创建store对象，并导出
export default new Vuex.Store({
    //角色对象
    actions,mutations,state,getters
});