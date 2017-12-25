<template>
  <swipe class="my-swipe" :speed="200" :showIndicators="true">
    <swipe-item :class="'slide'+val" v-for="val in 3" :key="val">
      <!-- <router-link to="/detail/1?a=1&b=2" tag="li"> -->
        <li><img :src="'src/assets/images/slide'+val+'.jpg'" height="200" alt=""/></li>
      <!-- </router-link> -->
    </swipe-item>
  </swipe>
</template>
<script>

import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';

/* import $ from "jquery";
import Swipe from "../assets/js/swipe.js"; 
//封装的轮播
*/
export default {
   components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },


  // mounted(){
  //    var mySwipe = new Swipe($(".banner")[0], {
  //     auto: 2000,
  //     continuous: true,
  //     stopPropation: true,
  //     callback: function(index, element) {
  //       $(".banner ul li").removeClass("active");
  //       $(".banner ul li")
  //         .eq(index)
  //         .addClass("active");
  //     }
  //   });
  // },
    
}
</script>
<style>
.my-swipe {
    margin-top: 48px;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
 /* .mint-swipe-items-wrap div{
    float: left;
  }*/
  .slide1 {
    height:inherit;
    /* background-color: #0089dc; */
    color: #fff;
  }

  .slide2 {
    height:inherit;
    /* background-color: #ffd705; */
    color: #000;
  }

  .slide3 {
    height:inherit;
    /* background-color: #ff2d4b; */
    color: #fff;
  }
li{list-style: none;}
  
</style>
