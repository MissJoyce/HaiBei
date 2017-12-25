<template>
<div id="load">
    <vue-loading type="beat" color="#d9544e" :size="{ width: '100px', height: '100px' }" class="load">
    </vue-loading>
</div>
    <!-- 'balls', 'bars', 'beat', 'bubbles', 'cylon', 'spin', 'spiningDubbles', 'barsCylon' -->
</template>
<script>
import vueLoading from "vue-loading-template";
export default {
    components:{
        vueLoading
    }
}
</script>
<style>
#load{
    width:100%;height: 100%;
    z-index:999999;
    position: relative;
    background:rgba(255,255,255,0.4);
}
.load{
     position: fixed;
     left:50%;
     top:50%;
     margin-top:-50px;
     margin-left:-60px;
    }

</style>
