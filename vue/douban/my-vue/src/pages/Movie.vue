<template>
  <div>
  <mMovieTitle></mMovieTitle>
  <div class="nav clear_fix">
    <mNavtabbar :value="selected_nav">
      <mNavtabbarItem mark="tab1" @change="getVal_nav">
        电影
      </mNavtabbarItem>
      <mNavtabbarItem mark="tab2" @change="getVal_nav">
        读书
      </mNavtabbarItem>
      <mNavtabbarItem mark="tab3" @change="getVal_nav">
        电视
      </mNavtabbarItem>
      <mNavtabbarItem mark="tab4" @change="getVal_nav">
        同城
      </mNavtabbarItem>
      <mNavtabbarItem mark="tab5" @change="getVal_nav">
        音乐
      </mNavtabbarItem>
    </mNavtabbar>
  </div>
    <div class="mainM">
        <mCinema></mCinema>
        <mPoster></mPoster>
        <mComingSoon></mComingSoon>
    </div>
  <div class="warp">
    <mTabbar :value="selected">
      <mTabbarItem mark="tab1" @change="getVal">
        <router-link to="/index"  slot="normal-img"><img src="../assets/images/ic_tab_home_normal.png" ></router-link><br/>
        <router-link to="/index"  slot="active-img"><img src="../assets/images/ic_tab_home_active.png" ></router-link>
        首页
      </mTabbarItem>
      <mTabbarItem mark="tab2" @change="getVal">
        <router-link to="/movie"  slot="normal-img"><img src="../assets/images/ic_tab_subject_normal.png"></router-link><br/>
        <router-link to="/movie"  slot="active-img"><img src="../assets/images/ic_tab_subject_active.png" ></router-link>
        书影音
      </mTabbarItem>
      <mTabbarItem mark="tab3" @change="getVal">
        <router-link to="/radio"  slot="normal-img"><img src="../assets/images/ic_tab_status_normal.png"></router-link><br/>
        <router-link to="/radio"  slot="active-img"> <img src="../assets/images/ic_tab_status_active.png"></router-link>
        广播
      </mTabbarItem>
      <mTabbarItem mark="tab4" @change="getVal">
        <router-link to="/group" slot="normal-img"><img src="../assets/images/ic_tab_group_normal.png"  ></router-link><br/>
        <router-link to="/group" slot="active-img"><img src="../assets/images/ic_tab_group_active.png"  ></router-link>
        小组
      </mTabbarItem>
      <mTabbarItem mark="tab5" @change="getVal">
        <router-link to="/mine" slot="normal-img" ><img src="../assets/images/ic_tab_profile_normal.png" ></router-link><br/>
        <router-link to="/mine" slot="active-img" ><img src="../assets/images/ic_tab_profile_active.png" ></router-link>
        我的
      </mTabbarItem>
    </mTabbar>
  </div>
  </div>
</template>

<script>

  import mTabbar from "../components/tabbar"
  import mTabbarItem from "../components/tabbar-item"
  import mMovieTitle from "../components/movie/movieTitle"
  import mNavtabbar from "../components/movie/nav-tabbar"
  import mNavtabbarItem from "../components/movie/nav-tabbar-item"
  import mCinema from "../components/movie/cinema"
  import mPoster from "../components/movie/poster"
  import mComingSoon from "../components/movie/comingSoon"


  export default{
    name:"Movie",
    data(){
      return{
        selected:"tab2",
        selected_nav:"tab1"
      }
    },
    methods:{
      getVal:function(msg){
        this.selected=msg
      },
      getVal_nav:function(msg){
        this.selected_nav=msg
      }
    },
    components:{
      mTabbar,
      mTabbarItem,
      mMovieTitle,
      mNavtabbar,
      mNavtabbarItem,
      mCinema,
      mPoster,
      mComingSoon
    }
  }
</script>

<style>
  .warp{position: absolute;bottom: 0;left: 0;width: 100%;}
  .warp img{height: 128px;width: 128px;}
  .nav{border-bottom: 1px solid #dfdfdf}

  .mainM{height: 1326px;overflow: auto;}




</style>
