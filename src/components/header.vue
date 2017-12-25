<template>
  <div class="head">
        <div id="mcover" v-show="overLay" @click="hideOverLay"><img src="../assets/images/guide.png"></div>
        <div id="ui-header">
            <div class="fixed">
                <a class="ui-title" id="popmenu" @click="showNavList" @mousemove="hideNavList2">选择分类</a>
                <a class="ui-btn-left_pre" href="#" @click="$router.go(-1)"></a>
                <router-link :to="headload"><a :class="uiBtn" href="#"></a></router-link> 
            </div>
	    </div>
	
	<div id="overlay" v-show="overLay" @click="hideOverLay"></div>
	
	<div id="win" v-show="navList">
		<ul class="dropdown"> 
			<router-link to="/home" tag="li"><a href="#"><span>首页</span></a></router-link>
            <router-link to="/photo" tag="li"><a href="#"><span>海贝相册</span></a></router-link>
            <router-link to="/about" tag="li"><a href="#"><span>关于海贝</span></a></router-link>
            <router-link to="/join" tag="li"><a href="#"><span>加盟条件</span></a></router-link>
            <router-link to="/like" tag="li"><a href="#"><span>心族系列</span></a></router-link>
            <router-link to="/contact" tag="li"><a href="#"><span>联系我们</span></a></router-link>
            <router-link to="/login" tag="li"><a href="#"><span>登录</span></a></router-link>
            <router-link to="/shopcart" tag="li"><a href="#"><span>购物车</span></a></router-link>
			<div class="clr"></div>
		</ul>
	</div>
  </div>
</template>
<script>

import {mapActions,mapGetters} from "vuex"

export default {

  methods:{
      ...mapActions([
          //showNavList 显示navlist  hideOverLay隐藏蒙版   hideNavList2 延时隐藏navlist
      "showNavList","hideOverLay","hideNavList2"
    ]),
    changeUiBtn(path){
        if(/like/.test(path)){
            this.$store.dispatch("uiBtnRefresh");
            this.$store.dispatch("HeadLoad");
        }else{
             this.$store.dispatch("uiBtnHome");
        }
    }
  },
  computed:mapGetters([
          "navList","uiBtn","overLay","headload"
      ]),
 watch:{
     $route(route){
         this.$store.dispatch("hideNavList");
         this.changeUiBtn(this.$route.path);
     }
 }
}
</script>
<style>
@import url("../assets/css/head.css");
</style>
