<template>
  <div id="news2">
      
          <!-- banner -->
          <slider></slider>
        
        <div class="detail">
			<h2>{{getDetail.title}}</h2>
      <h3>{{getDetail.date|date}}</h3>
			<div class="price">
				<span>￥{{getDetail.price}}</span>&nbsp;&nbsp;<b>LOVE YOU</b>
			</div>
			<div class="kucun">
				<p>库存：1</p>
				<p>运费：免运费</p>
		   </div>
		</div>
		<div class="comment">
			
		</div>
        <div class="detail-con">
        	<p>{{getDetail.desc}}</p>
	      	<br/>
        	<p>{{getDetail.desc2}}</p>
        </div>
		<div class="h50"></div>
		<ul class="fixed-btn">
			<router-link to="/shopcart" tag="li"><a href="" class="current" >立即购买</a></router-link>
			<li><a href="javascript:;" @click="addItem(getDetail)">加入购物车</a></li>
		</ul>
  </div>
</template>
<script>
import slider from "./slider.vue"
import {mapActions,mapGetters} from "vuex"
export default {
    // data(){
    //     return{id:this.$route.params.id}
    // },
  created(){
    // console.log(this.$route.params.id);
    //console.log(this.$route);
    this.$store.dispatch("setDetailNum",this.$route.params.id);

  },
  computed:mapGetters([
      "getDetailNum","getDetail"
  ]),
  methods:mapActions([
      "addItem"
  ]),
  components:{
      slider
  }
}
</script>
<style>
@import url("../assets/css/detail.css");
</style>
