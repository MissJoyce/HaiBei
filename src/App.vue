<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <myhead v-show="getNav"></myhead>
    <transition 
    enter-active-class="animated zoomIn">
        <router-view>展示区</router-view>
    </transition>
  </div>
</template>


<script>

import myhead from "./components/header.vue";
import loading from "./components/loading.vue";

import {mapActions,mapGetters} from "vuex";

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    myhead,loading
  },
  methods:{
    // ...getActions(["getNav"]),
  
    //header部分出现页面
    showHead(path){
     // let path=route.path;
      if(/about|contact|join|photo|like|detail/.test(path)){
          this.$store.dispatch("showNav"); //组件 发送一个showNav的请求类型--.>actions  显示头部
      }
      if(/home|login|reg|error|shopcart/.test(path)){  //隐藏头部
        this.$store.dispatch("hideNav"); 
      }
    }
  },
  watch:{
    $route(route){  //监听路由，
      //console.log("$route",route.path);
      this.showHead(this.$route.path);
    }
  },
  mounted(){
    //console.log(this.$route.path);
    this.showHead(this.$route.path);
  },
  //计算属性，交给mapGetter接管，components通过getters获取state的数据
   computed:mapGetters([
    "getNav","bLoading"   // 是个类型，也是个函数
    ]) 
}
</script>

<style>
</style>
