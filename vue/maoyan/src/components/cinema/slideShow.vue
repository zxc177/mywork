<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../assets/images/slide1.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/images/slide2.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/images/slide3.jpg"/></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "../../../config/swiper-3.4.2.min.js"
  require("../../../config/swiper-3.4.2.min.css");

  export default{
    mounted(){
      console.log("1");
      var swiper = new Swiper('.swiper-container',{
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      });
    }
  }
</script>

<style>
  .swiper-container{
    width: 100%;
    height: 0.98rem;
  }
  .swiper-slide{
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img{
    height: 0.98rem;
    width: 100%;
  }
</style>
