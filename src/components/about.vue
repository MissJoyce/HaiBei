<template>
  <div id="news2">
	<div class="Listpage">
		<div class="top46"></div>
		
		<div class="page-bizinfo">
			<div class="header" style="position: relative;">
				<h1 id="activity-name">品牌故事</h1>
				<span id="post-date">2013-11-01</span>　<span class="commentNum">浏览次数:109</span>
			</div>
			
			<div class="showpic"><img src="../assets/images/1234534.jpg" ></div>
			
			<div class="text" id="content">
				<p>海贝品牌诞生于2002年，但公司从事女装的历史可以追溯到上世纪九十年代初。今天海贝已成为一家全国<span style="line-height:1.5;">性的处于高速成长期的时尚女装公司。海贝相信美是所有女性的梦想，为每个女性创造美，让她们时时刻刻散</span><span style="line-height:1.5;">发迷人光彩，是海贝不懈的追求。</span></p>
				<p><span style="line-height:1.5;">2002年，海贝诞生，品牌纪元开始了新的篇章。海贝以撷全球时尚，打造丰富内涵及风格女装为设计理</span><span style="line-height:1.5;">念，通过发掘中国女性内心深处美的理念，融汇中西方多元时尚元素，打造时尚与适穿的丰富服饰产品。海贝</span><span style="line-height:1.5;">是物超所值的品质，是时尚潮流的舒适，是展现女性美丽的典范。</span></p>
			</div>
				
			<div id="mess_share">
				<div id="share_1">
					<button class="button2" @click="showOverLay"><img src="../assets/images/icon_msg.png">&nbsp;发送给朋友</button>
				</div>
				<div id="share_2">
					<button class="button2" @click="showOverLay"><img src="../assets/images/icon_timeline.png">&nbsp;分享到朋友圈</button>
				</div>
				<div class="clr"></div>
			</div>
		</div>
	
		<a class="footer" href="#top"  target="_self"><span class="top">返回顶部</span></a>
		
	</div>

	<div align="center">温馨提示：本信息仅供提供演示方便链接，与原网站无关！ <router-link to="/home" tag="a">首页</router-link>  <router-link to="/join" tag="a"> 加盟页</router-link>  <router-link to="/contact" tag="a">联系我们页</router-link>  <router-link to="/about" tag="a">品牌页</router-link>  <router-link to="/photo" tag="a">相册列表页</router-link></div>

	
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
	methods:{
		...mapActions([
			"showOverLay"
		]),
	},
 /*  mounted(){
      document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	window.shareData = {  
	   "imgUrl": "http://t3.qpic.cn/mblogpic/936fba3aadd0fc4cac9a/2000", 
		"timeLineLink": 'wxapi.php@ac=news2&tid=24953&from=app',
		"sendFriendLink": 'wxapi.php@ac=news2&tid=24953&from=app',
		"weiboLink": 'wxapi.php@ac=news2&tid=24953&from=app',
		"tTitle": "加盟条件",
		"tContent": "加盟条件",
		"fTitle": "加盟条件",
		"fContent": "加盟条件",
		"wContent": "加盟条件" 
	};
	// 发送给好友
	WeixinJSBridge.on('menu:share:appmessage', function (argv) {
		WeixinJSBridge.invoke('sendAppMessage', { 
			"img_url": window.shareData.imgUrl,
			"img_width": "640",
			"img_height": "640",
			"link": window.shareData.sendFriendLink,
			"desc": window.shareData.fContent,
			"title": window.shareData.fTitle
		}, function (res) {
			_report('send_msg', res.err_msg);
		})
	});

	// 分享到朋友圈
	WeixinJSBridge.on('menu:share:timeline', function (argv) {
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url": window.shareData.imgUrl,
			"img_width": "640",
			"img_height": "640",
			"link": window.shareData.timeLineLink,
			"desc": window.shareData.tContent,
			"title": window.shareData.tTitle
		}, function (res) {
			_report('timeline', res.err_msg);
		});
	});
	
	// 分享到微博
	WeixinJSBridge.on('menu:share:weibo', function (argv) {
		WeixinJSBridge.invoke('shareWeibo', {
			"content": window.shareData.wContent,
			"url": window.shareData.weiboLink,
		}, function (res) {
			_report('weibo', res.err_msg);
		});
	});
	
}, false)
  } */
}
</script>
<style>
    @import url("../assets/css/news/news2_3.css");
    /* @import url("../assets/css/plugmenu.css"); */
</style>
