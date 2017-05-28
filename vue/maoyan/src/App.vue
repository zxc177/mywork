<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
  $(function(){
    $("html").css({
      "font-size":$(document).width()/414*100+"px"
    });
  })
</script>

<style>
  body,h1,h2,h3,h4,h5,h6,p,ul,ol,li,dd,dt,dl,input,textarea{margin: 0;padding: 0;}
  ul{list-style: none;}
  a{text-decoration: none;}
  img,input{border: none;}
  input,textarea{outline: none;}
  body{font-family: Arial ,"Microsoft Yahei","宋体";font-size: 100px;height: 100vh}
  .clear_fix:after{content: "200b";display: block;height: 0;font-size: 0;clear: both;visibility: hidden;}
  i,em{font-style: normal;}

  @media screen and (max-width:960px){

  }
  @media screen and (max-width:768px){

  }
  @media screen and (max-width:480px){

  }



</style>
