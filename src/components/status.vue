<template>
    <div id="box">
        <dl v-show="loginSuc">
            <dt>LOGIN SUCCESS!</dt>
            <router-link to="/home" ><dd @click="cancel">首页</dd></router-link>
            <router-link to="/photo"><dd @click="cancel">相册</dd></router-link>
            <router-link to="/about"><dd @click="cancel">关于海贝</dd></router-link>
            <router-link to="/join"><dd @click="cancel">加入海贝</dd></router-link>
            <router-link to="/like"><dd @click="cancel">心族系列</dd></router-link>
            <router-link to="/shopcart"><dd @click="cancel">购物车</dd></router-link>   
        </dl>
        <dl v-show="loginErr">
            <dt>LOGIN ERROR!</dt>
            <dd>用户名或密码错误，登录失败</dd>
            <router-link to="/login"><dd @click="cancel">返回</dd></router-link>
            <router-link to="/reg"><dd @click="cancel">没有账号,去注册</dd></router-link>
        </dl>
        <dl v-show="loginErrTwo">
            <dt>LOGIN ERROR!</dt>
            <dd>用户名或密码不能为空，登录失败</dd>
            <router-link to="/login"><dd @click="cancel">返回</dd></router-link>
            <router-link to="/reg"><dd @click="cancel">没有账号,去注册</dd></router-link>
        </dl>

        <dl v-show="regSuc">
            <dt>REG SUCCESS!</dt>
            <router-link to="/login"><dd @click="cancel">注册成功，去登录</dd></router-link>
        </dl>
        <dl v-show="regErr">
            <dt>REG ERROR!</dt>
            <dd>用户名已存在,注册失败</dd>
            <router-link to="/reg"><dd @click="cancel">返回</dd></router-link>
            <router-link to="/home"><dd @click="cancel">去首页</dd></router-link>
        </dl>
        <dl v-show="regErrTwo">
            <dt>REG ERROR!</dt>
            <dd>用户名或密码格式错误,不能为空</dd>
            <router-link to="/reg"><dd @click="cancel">返回</dd></router-link>
            <router-link to="/home"><dd @click="cancel">去首页</dd></router-link>
        </dl>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {

 methods:mapActions([
     "cancel"
 ]),
  computed:mapGetters([
      "loginSuc","loginErr","loginErrTwo","regSuc","regErr","regErrTwo"
  ]),
}
</script>
<style>
#box dl{width:100%;height:100%;padding:30px 40px;font:20px/32px "";color:brown;background:rgba(0,0,0,0.5);position:absolute;left:0;top:0;}
#box dl dd{font:20px/32px "";}
</style>
