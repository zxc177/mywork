<template>
  <div>
  <mRadioTitle></mRadioTitle>
   <div class="mainR">
     <div class="inner">
       <mFound></mFound>
       <mUser></mUser>
     </div>
     <div class="hiddenR"></div>
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
  import mRadioTitle from "../components/radio/radioTitle"
  import mFound from "../components/radio/found"
  import mUser from "../components/radio/user"
  import mSelect from "../components/radio/select.vue"


  export default{
    name:"Radio",
    data(){
      return{
        selected:"tab3"
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
      mRadioTitle,
      mFound,
      mUser,
      mSelect
    }
  }
</script>

<style>
  .mainR{position: relative;overflow: hidden;}
  .mainR .inner{padding: 0 4%;height: 1310px;overflow: auto;background: #f8f8f8;}
  .mainR .hiddenR{width: 30px;height: 1310px;position: absolute;top: 0;right: 0;background: #f8f8f8;}
</style>
