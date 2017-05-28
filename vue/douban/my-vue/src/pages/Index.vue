<template>
<div>
  <mSearch></mSearch>
  <mBanner></mBanner>
  <div class="main">
    <div class="inner">
      <mHot></mHot>
      <mMoment></mMoment>
    </div>
    <div class="hiddenI"></div>
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
  import mSearch from "../components/index/search"
  import mBanner from "../components/index/banner"
  import mHot from "../components/index/Hot"
  import mMoment from "../components/index/moment.vue"

  var activeZindex=1;  //代表当前最大的z-index
  var activePicIndex=0; //代表当前焦点图片的索引
  var timer;     //保存定时器变量
  var delay=3000;  //图片切换的延时

  function carousel(){

    console.log(1);
    //初始化 banner
    //将第一张图片放在最上面
    $(".banner-pic").find("a").first().css("zIndex",activeZindex);

    /************************增加鼠标悬停时间响应***********************/
      //添加鼠标悬停事件响应
    $(".banner").hover(
      function(){
        //停止图片播放-清楚定时器
        clearInterval(timer);
      },
      function(){
        playBanner();
      }
    );

    /*************************动态生成导航按钮************************/

    var navContent="";
    $(".banner-pic").find("a").each(function(){
      navContent+="<span></span>";
    });
    //将生成的span添加到banner-nav中，并为第一个span清空class
    $(".banner-nav").html(navContent).children().first().addClass("active");

    /*****************导航安妮添加鼠标移入事件响应*******************/

      //遍历按钮集合,为每个按钮添加鼠标移入事件响应

    $(".banner-nav").find("span").each(function(){
      $(this).on("mouseenter",function(e){
        // 1)将当前按钮的样式设为.active;2)重置所有按钮的样式;
        $(this).addClass("active").siblings().removeClass();
        //获取哪个按钮被点击,也就是找到被点击按钮的索引值
        var index=$(this).index();

        // 3)将对应位置的图片，动态滑入;向右偏移980px;将该图片的z-index值提升
        $(".banner-pic").find("a").eq(index).css({left:"980px",zIndex:activeZindex++}).animate({left:"0"},1000);

        //将刚滑入的图片的索引值设为当前焦点图片的索引
        activePicIndex=index;
        e.stopPropagation();    //阻止事件传播
      });
    });


    /***********************为执行图片播放***********************/

    playBanner();

    function  playBanner(){
      var picNum=$(".banner-pic").find("a").length;

      clearInterval(timer);
      timer=setInterval(anim,delay);

      function anim(){
        //选取下一张图片

        var nextIndex=activePicIndex+1;
        if(nextIndex==picNum){
          nextIndex=0;
        }

        //模拟触发数字按钮的 mouseover-在匹配的对象上触发指定事件

        $(".banner-nav").find("span").eq(nextIndex).trigger("mouseenter");
      }
    }
  }

  export default{
    name:"Index",
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
      mSearch,
      mBanner,
      mHot,
      mMoment
    },
    beforeMount:function(){
      $(function(){
        carousel()
      });
    },
    destroyed:function (){
      activePicIndex=0;
      clearInterval(timer)
    }
  }

</script>

<style>
  .warp{position: absolute;bottom: 0;left: 0;width: 100%;}
  .warp img{height: 128px;width: 128px;}
  a{text-decoration: none;color: #999;}
  .main{position: relative;}
  .inner{height: 1069px;overflow: auto;}
  .hiddenI{height: 1069px;width: 15px;background: #fff;position: absolute;top: 0;right: 0;}
</style>
