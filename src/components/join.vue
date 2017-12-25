<template>
<div id="news2">
    <div class="Listpage">
	
		<div class="top46"></div>
		
		<div class="page-bizinfo">
		
			<div class="header" style="position: relative;">
				<h1 id="activity-name">加盟条件</h1>
				<span id="post-date">2013-11-01</span>　<span class="commentNum">浏览次数:109</span>
			</div>
			
			<div class="showpic"><img src="../assets/images/1231.jpg" ></div>
			
			<div class="text" id="content">
				<p>加盟商的选择标准<br />个性：积极、开朗、挚爱服装，热衷时尚，对自身追求能付出努力并全身心投入，善于学习。<br />经营能力：能全身心地投入到经营中去，具备一定的市场敏锐度，并能随时根据情况及时做出反应。<br />社会关系：有较好的社会关系，能妥善处理经营过程中的突发问题。<br />财务状况：能独立投资一切费用（个人为佳），并可承担一定的投资风险。</p>
				<p>店铺的标准</p>
				<p>A专卖店<br />位置：应付于中高档服装专卖街（女装专卖街为佳）的黄金地段，在100米外能清楚地看到门头招牌的字；在300米外能清楚的看到门头的外观。<br />面积：以5米以上的宽度，10-12米的深度，4米的高度为最佳，一般市在60平方米以上。<br />B商场专柜或店中店<br />位置：当地二级以上商场的少淑女装区域，自动扶梯领柜为佳，可以做三面2.6米以上的高墙的边厅为最佳；对于中岛位置以一面2.6米以上高墙，一面可做1.5米以上的矮墙为佳。<br />面积：45平方米以上，对特殊情况需经过请示方可。
				</p>
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

            <a class="footer" href="#top"  target="_self"><span class="top">返回顶部</span></a>
		</div>
	
		<div align="center">温馨提示：本信息仅供提供演示方便链接，与原网站无关！ <router-link to="/home" tag="a">首页</router-link>  <router-link to="/join" tag="a"> 加盟页</router-link>  <router-link to="/contact" tag="a">联系我们页</router-link>  <router-link to="/about" tag="a">品牌页</router-link>  <router-link to="/photo" tag="a">相册列表页</router-link></div>
	</div>
</div>
</template>
<script>
import {mapActions} from "vuex";
    export default {
        methods:{
            ...mapActions([
                "showOverLay"
            ])
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
@import url("../assets/css/plugmenu.css");
</style>
