<template>
  <div>
    尚未开发
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
  import mTabbarItem from "../components/tabbar-item"
  import mTabbar from "../components/tabbar"

  export default{
    name:"index",
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
    components:{
      mTabbar,
      mTabbarItem
    }
  }

</script>
