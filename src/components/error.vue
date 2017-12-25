<template>
  <div id="err">
      <div id="errbox">
           <img src="../assets/images/cry.png" alt="">
            <h3>找不到您的文件</h3>
            <p>ERR_FILE_NOT_FIND</p>
      </div>
     
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#err{
    height:100%;
    text-align:center;
    position:relative;
}
#errbox{
    width:100%;
    position:absolute;
    top:26%;
}
h3{
    font:24px/48px "";
}
p{
    font:18px/24px "";
}
</style>
