<template>
  <div>
    <mHeader></mHeader>
    <div class="main">
      <mSearch></mSearch>
      <mSlideShow></mSlideShow>
      <mFilmCome></mFilmCome>
    </div>
    <div class="warp">
      <mTabbar :value="selected" >
        <mTabbarItem mark="tab1" @change="getVal">
          <router-link  to="/index" slot="normal-img" ><img src="../assets/images/nav1-2.jpg"/></router-link><br/>
          <router-link  to="/index" slot="active-img"><img src="../assets/images/nav1.jpg"/></router-link>
          电影
        </mTabbarItem>
        <mTabbarItem mark="tab2" @change="getVal">
          <router-link  to="/cinema" slot="normal-img"><img src="../assets/images/nav2.jpg"/></router-link><br/>
          <router-link  to="/cinema" slot="active-img"><img src="../assets/images/nav2-2.jpg"/></router-link>
          影院
        </mTabbarItem>
        <mTabbarItem mark="tab3" @change="getVal">
          <router-link to="/find" slot="normal-img"><img src="../assets/images/nav3.jpg"/></router-link><br/>
          <router-link to="/find" slot="active-img"><img src="../assets/images/nav3-3.jpg"/></router-link>
          发现
        </mTabbarItem>
        <mTabbarItem mark="tab4" @change="getVal">
          <router-link to="/mine" slot="normal-img"><img src="../assets/images/nav4.jpg"/></router-link><br/>
          <router-link to="/mine" slot="active-img"><img src="../assets/images/nav4-4.jpg"/></router-link>
          我的
        </mTabbarItem>
      </mTabbar>
    </div>
  </div>
</template>

<script>
  import mTabbar from "../components/tabbar"
  import mTabbarItem from "../components/tabbar-item"
  import mHeader from "../components/index/header"
  import mSearch from "../components/index/search"
  import mSlideShow from "../components/index/slideShow"
  import mFilmCome from "../components/index/filmCome"


  export default{
    name:"index",
    data(){
      return{
        selected:"tab1"
      }
    },
    methods:{
      getVal:function(msg){
        this.selected=msg
      }
    },
    components:{
      mTabbar,
      mTabbarItem,
      mHeader,
      mSearch,
      mSlideShow,
      mFilmCome
    }
  }

</script>

<style>
  .warp{
    position: absolute;bottom: 0;left: 0;width: 100%;

  }
  .warp img{
    height: 0.28rem;
    width: 0.28rem;
  }
  .warp a{
    padding: 0.16rem 0.35rem 0.10rem;
  }
  .main{
    width: 100%;
    height: 6.26rem;
    overflow:auto;
    margin-top: -0.01rem;
  }
  @media screen and (max-width:1024px){
    .main{
      height: 4.44rem;
    }
  }
  @media screen and (max-width:414px){
    .main{
      height: 6.26rem;
    }
  }



</style>
