<template>
  <div class="registerBg"> 
 
    <div class="container">
        <div class="photograph"> 
            <router-link to="/home" tag="span"><img src="../assets/images/login/photograph.png" alt="个人头像" class="photographImg"></router-link>
        </div>
        
        <div class="input-group"> 
            <span class="input-group-addon"><img alt="登录" src="../assets/images/login/account.png"></span>
            <input type="text" class="form-control" placeholder="用户名/邮箱登录" v-model="username" @blur="setIptName(username)">
        </div>
        <div class="input-group"> 
            <span class="input-group-addon"><img  alt="密码" src="../assets/images/login/password.png"></span>
            <input type="password" class="form-control" placeholder="密码输入" v-model="password" @blur="setIptPsd(password)">
        </div>
        
        <button type="button" class="btn btn-default btn-block" @click="login({loginName,loginPsd})">登录</button>
        
        <div class="onceWord">
            <router-link to="/reg" tag="a">
                <span class="once">立即注册</span>
            </router-link>
            <a href="#"><span class="forget">忘记密码？</span></a>
        </div>
        
        <div class="register-a">
            <span class="register-aa"></span>
            <span class="register-ab">使用第三方账号登录</span>
            <span class="register-ac"></span>
        </div>
        
        <div class="register-a">
            <a href="#"><img src="../assets/images/login/weixin.png" alt="微信" class="register-ad"></a>
            <a href="#"><img src="../assets/images/login/weibo.png" alt="微博" class="register-ad"></a>
            <a href="#"><img src="../assets/images/login/QQ.png" alt="QQ"></a>
        </div>
    </div>
    <status></status>
</div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import status from "./status.vue";
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
  methods:mapActions([
      "login","setIptName","setIptPsd"
  ]),
  computed:mapGetters([
     "loginName","loginPsd"
  ]),
  components:{
      status
  },
}
</script>
<style>
/* @import url("../assets/css/login/bootstrap.min.css"); */
@import url("../assets/css/login/login.css");
</style>
