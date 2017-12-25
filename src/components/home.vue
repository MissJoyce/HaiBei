<template>
  <div id="cate18">
     <!-- 轮播图 -->
    <homeswiper></homeswiper>
    
    <div class="device">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="content-slide">
                        <router-link to="/home" tag="a">
                        <!-- <a href="#"> -->
                            <p class="ico"><img src="../assets/images/h.png" /></p>
                            <p class="title">首页</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/photo" tag="a">
                        <!-- <a href="#"> -->
                            <p class="ico"><img src="../assets/images/p.png" /></p>
                            <p class="title">海贝相册</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/about" tag="a">
                        <!-- <a href=""> -->
                            <p class="ico"><img src="../assets/images/a.png" /></p>
                            <p class="title">关于海贝</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/join" tag="a">
                        <!-- <a href="jiameng.html"> -->
                            <p class="ico"><img src="../assets/images/b.png" /></p>
                            <p class="title">加盟条件</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/like" tag="a">                        
                        <!-- <a href=""> -->
                            <p class="ico"><img src="../assets/images/x.png" /></p>
                            <p class="title">心族系列</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/contact" tag="a">                        
                        <!-- <a href="lianxi.html"> -->
                            <p class="ico"><img src="../assets/images/c.png" /></p>
                            <p class="title">联系我们</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/login" tag="a">                        
                                                
                        <!-- <a href="#"> -->
                            <p class="ico"><img src="../assets/images/y.png" /></p>
                            <p class="title">登录</p>
                        <!-- </a> -->
                        </router-link>
                        <router-link to="/shopcart" tag="a">                        
                        <!-- <a href="#"> -->
                            <p class="ico"><img src="../assets/images/shopcart.png" /></p>
                            <p class="title">购物车</p>
                        <!-- </a> -->
                        </router-link>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>


import homeswiper from "./homeSwiper"


// import {mapGetters,mapActions} from "vuex"
export default {
   data(){
       return {}
   },
   components:{
       homeswiper
   },
   
} 
</script>
<style>
/* @import url("../assets/css/idangerous.swiper.css"); */
    @import url("../assets/css/plugmenu.css");
    @import url("../assets/css/cate/cate18_.css");
</style>
