<template>

  <div class="bufferPage" >
    <div class="maoyan_txt">一网打尽好电影</div>
    <div class="log"><img src="../assets/images/logo_03.jpg"/></div>
    <span>&copy;maoyan.com 美团云提供技术服务</span>
  </div>
</template>

<script>
  export default{
    name:"bufferPage",
    methods:{

    }
  }
</script>

<style>
  .bufferPage{
    width: 100%;
    background: #fff;
    position: absolute;
    z-index: 999;
    padding-bottom: 0.03rem;
  }
  .bufferPage .maoyan_txt{
    padding-top: 1.35rem;
    font-size: 0.38rem;
    color: #cb2e27;
    text-align: center;
    width: 0.5rem;
    font-family: 宋体;
    margin: 0 auto;
    line-height: 0.53rem;
    height: 3.77rem;
    padding-bottom: 1.06rem;
  }
  .bufferPage .log{
    width: 0.92rem;
    height: 0.94rem;
    margin: 0 auto;
  }
  .bufferPage .log img{
    height: 0.92rem;
    width: 0.94rem;
    float: left;
  }
  .bufferPage span{
    font-size: 0.12rem;
    color: #ccc;
    height: 0.2rem;
    line-height: 0.2rem;
    display: block;
    text-align: center;
  }
  @media screen and (max-width:1024px){
    .bufferPage .maoyan_txt{
      padding: 0.48rem 0 0.1rem 0;
      line-height: 0.45rem;
    }
  }
  @media screen and (max-width:768px){
    .bufferPage .maoyan_txt{
      padding: 0.48rem 0 0.1rem 0;
      line-height: 0.45rem;
    }
  }
  @media screen and (max-width:414px){
    .bufferPage .maoyan_txt{
      padding: 1.35rem 0 1.06rem 0;
      line-height: 0.53rem;
    }
  }

</style>
