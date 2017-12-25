<template>
  <div class="shopcart">
			<div class="tit"><h3>购物车 SHOPPING BAG</h3><span v-show="Myname.showName">{{Myname.name}}</span><router-link to="/home" tag="a">HOME</router-link></div>
			
			<div class="p-groups">
				<table>
					<tr v-for="item in getShopcar" :key="item.id">
						<td><img :src="item.src" alt=""></td>
                        <td>{{item.title}}</td>
                        <td><span class="price">￥{{item.price}}</span></td>
                        <td>
                            <div class="xuan">
                                <input type="button" value="-" id="minus" @click="changeItem({id:item.id,num:-1})">
                                <input id="text_box" name="" type="number" :value="item.number" min="1"/>
                                <input type="button" value="+" id="add" @click="changeItem({id:item.id,num:1})">  
                            </div>
                        </td>
                        <td>小计:￥{{item.price*item.number}}</td>
                        <td>
                            <input type="button" value="删除" id="del" @click="delItem({id:item.id})">
                        </td>
                    </tr>
				</table>
			</div>
			<div class="fixed clear">
				<div class="confirm left"><span @click="clearBuycar">清空购物车</span></div>
				<div class="accounts right">
					<span>已优惠:<i>￥0.00</i></span>
					<span>总计:<i class="totalM">￥{{getTotalPrice}}</i></span>
					<a href="#" class="count">立即结算</a>
				</div>
			</div>

		</div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
export default {

	methods:mapActions([
		"changeItem","delItem","clearBuycar",
	]),
	computed:mapGetters([
		"getShopcar","Myname","getTotalPrice"
	])
}
</script>
<style>
@import url("../assets/css/shopcart.css");
@import url("../assets/css/public.css");



</style>
