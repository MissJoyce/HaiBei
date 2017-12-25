<template>
  <div id="listhome5">
	<div class="Listpage">
		<div class="top46"></div>

		<div id="todayList">
			<ul class="chatPanel">
				<li v-for="(item) in getCurrentList" :key="item.id" class="mediaFullText">
					<a href="#">
						<div class="time">
							<p><span class="timed">{{item.date[2]}}</span>/<span class="timem">{{item.date[1]}}</span></p>
							<p class="timey">{{item.date[0]}}</p>
							<span class="timex"></span>
						</div>
						<div class="mediaPanel media">
							<div class="mediaHead"><span class="title">{{item.title}}</span></div>
							<div class="mediaImg"><img :src="item.src"></div>
							<div class="mediaContent mediaContentP">
								<p>{{item.title}}</p>
							</div>
							<router-link :to="'detail/'+item.id" class="mediaFooter" tag="div">
							<!-- <div class="mediaFooter">	 -->
								<span class="mesgIcon right"></span>
								<span style="line-height:50px;" class="left">查看全文</span>
								<div class="clr"></div>
							<!-- </div> -->
							</router-link>
						</div>
					</a>
				</li>
			</ul>
		</div>

		<div class="pagination">
			<div class="disabled "><a href="#" @click="prePage">上一页</a></div>
			<div class="allpage">
				<div class="currentpage">{{currentpage}}/{{getPages}}</div>
			</div>
			<div class="disabled" ><a href="#" @click="nextPage">下一页</a></div>
		</div>
	</div>
    <div align="center">温馨提示：本信息仅供提供演示方便链接，与原网站无关!<router-link to="/home" tag="a">首页</router-link>  <router-link to="/join" tag="a"> 加盟页</router-link>  <router-link to="/contact" tag="a">联系我们页</router-link>  <router-link to="/about" tag="a">品牌页</router-link>  <router-link to="/photo" tag="a">相册列表页</router-link></div>
  </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";

export default {

  methods:{
		...mapActions([
			"prePage","nextPage"
		]),
		getPhotoData(){
			 this.$store.dispatch('getPhotoData');
			//  this.$store.dispatch("setTotalPages");
		}
  },
  mounted(){
		//当前这个vue组件请求数据
		this.getPhotoData();
	 /*  this.$http({
		  url:"http://localhost:3000/photo",
			method:"get",
			params:{}
	  }).then((res)=>{
		//   console.log(res,"axios",res.data);
		//  console.log([...this.getPhotoList]);  //[]  空
		  let data = res.data;
		  //将拿到的数据存放在state中
		  this.$store.dispatch("photoList",data);
		 
	  }).catch((res)=>{
		  console.log(res,"photo数据请求错误")
	  }) */
  },
  computed:mapGetters([
	  "getCurrentList","getPages","currentpage"
  ]),
}
</script>
<style>

@import url("../assets/css/listhome/listhome5_3.css");
@import url("../assets/css/plugmenu.css");
</style>
