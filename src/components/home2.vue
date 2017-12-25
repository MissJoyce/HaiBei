<template>
  <div id="cate18">
     <!-- 轮播图 -->
     <div class="banner">
        <div id="wrapper" style="overflow: hidden; ">
            <div id="scroller">
                <ul id="thelist">
                    <li><img src="src/assets/images/lun1.jpg" /></li>
                    <li><img src="src/assets/images/lun2.jpg" /></li>
                    <li><img src="src/assets/images/lun3.jpg" /></li>
                    <li><img src="src/assets/images/lun4.jpg" /></li>
                    <li><img src="src/assets/images/lun5.jpg" /></li>
                </ul>
            </div>
        </div>
        <!-- <div id="nav">
            <div id="prev" onClick="myScroll.scrollToPage('prev', 0,400,3);return false">← prev</div>
            <ul id="indicator">
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <div id="next" onClick="myScroll.scrollToPage('next', 0,400,3);return false">next →</div>
        </div> -->
        <div class="clr"></div>
    </div> 
    <div class="device">
        <a class="arrow-left" href="#"></a> 
        <a class="arrow-right" href="#"></a>
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
    <div class="pagination">
        <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
    </div>
</div>
</template>
<script>

// import slider from "./slider" //引入轮播组件

import iScroll from "../assets/js/iscroll.js";
import $ from "jquery";//引入npm 安装后的模块化的jquery
import Swiper from '../assets/js/idangerous.swiper-2.1.min.js';  
//import Swiper from "../assets/js/swipe.js"
//导入是非模块化的，自行垫一层 (export default 函数) -> 可模块化的

import {mapGetters,mapActions} from "vuex"
export default {
    mounted(){
            var myScroll;
            function loaded() {
                myScroll = new iScroll.iScroll('wrapper', {
                    snap: true,
                    momentum: false,
                    hScrollbar: false,
                    onScrollEnd: function () {
                    document.querySelector('#indicator > li.active').className = '';
                    document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
                        
                    }
                });
            }
            document.addEventListener('DOMContentLoaded', loaded, false);
            loaded()
            var mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop:true,
                grabCursor: true,
                paginationClickable: true
            })
            $('.arrow-left').on('click', function(e){
                e.preventDefault()
                mySwiper.swipePrev()
            })
            $('.arrow-right').on('click', function(e){
                e.preventDefault()
                mySwiper.swipeNext()
            })

            var count = document.getElementById("thelist").getElementsByTagName("img").length;	
            var count2 = document.getElementsByClassName("menuimg").length;
            for(var i=0;i<count;i++){
                document.getElementById("thelist").getElementsByTagName("img").item(i).style.cssText = " width:"+document.body.clientWidth+"px";
            }
            document.getElementById("scroller").style.cssText = " width:"+document.body.clientWidth*count+"px";
            
            setInterval(function(){
                myScroll.scrollToPage('next', 0,400,count);
            },1500 );

            window.onresize = function(){ 
                for(var i=0;i<count;i++){
                    document.getElementById("thelist").getElementsByTagName("img").item(i).style.cssText = " width:"+document.body.clientWidth+"px";
                }
                document.getElementById("scroller").style.cssText = " width:"+document.body.clientWidth*count+"px";
            } 
    },

} 
</script>
<style>
    @import url("../assets/css/idangerous.swiper.css");
    @import url("../assets/css/iscroll.css");
    @import url("../assets/css/plugmenu.css");
    @import url("../assets/css/cate/cate18_.css");
</style>
