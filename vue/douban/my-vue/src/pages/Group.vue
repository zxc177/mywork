<template>
  <div>
    <mGroupTitle></mGroupTitle>
    <div class="mainG">
      <div class="inner">
        <mJoinUs></mJoinUs>
        <mFilm></mFilm>
      </div>
      <mSelect></mSelect>
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
  import mJoinUs from "../components/group/joinUs"
  import mGroupTitle from "../components/group/groupTitle"
  import mFilm from "../components/group/film"
  import mSelect from "../components/group/select.vue"

  export default{
    name:"Group",
    data(){
      return{
        selected:"tab4"
      }
    },
    methods:{
      getVal:function(msg){
        this.selected=msg
      }
    },
    components: {
      mTabbar,
      mTabbarItem,
      mJoinUs,
      mGroupTitle,
      mFilm,
      mSelect
    }
  }

</script>

<style>

  .mainG .inner{height: 1310px;overflow: auto;background: #fff;}




</style>
