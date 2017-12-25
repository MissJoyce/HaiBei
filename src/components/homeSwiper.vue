<template>
  <swiper loop :autoplay= 1000>
    <div v-for="n in 5" :key="n" class="vue2swiper"><img :src="'src/assets/images/lun'+n+'.jpg'"/></div>
 </swiper>
</template>
<script>
import {Swiper} from "vue2-swiper"
export default {
  components:{
      Swiper
  }
}
</script>
<style>
    .vue2swiper img{width:640px;height:1136px;display: inline-block;}

</style>
