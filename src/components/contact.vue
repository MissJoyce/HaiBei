<template>
  <div id="news2">
    <div class="Listpage">
	
		<div class="top46"></div>
		
		<div class="page-bizinfo">

			<div class="header" style="position: relative;">
				<h1 id="activity-name">联系我们</h1>
				<span id="post-date">2017-10-01</span>　<span class="commentNum">浏览次数:109</span>
			</div>
			
			<div class="showpic"><img src="../assets/images/12341235.jpg" ></div>
			
			<div class="text" id="content">
				<span style="font-family:Microsoft YaHei;font-size:14px;"><strong>浙江海贝服饰有限公司</strong></span><br />
				<span style="font-family:Microsoft YaHei;font-size:14px;"><strong>电话：0571-28978812</strong></span><br />
				<span style="font-family:Microsoft YaHei;font-size:14px;"><strong>地址：杭州市新塘路19号采荷嘉业大厦5幢17-19楼</strong></span>
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
		])
	},
/*   mounted(){
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
@import url("../assets/css/plugmenu.css");
</style>
