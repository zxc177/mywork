<template>
  <ul class="user">
    <li class="clear_fix" v-show="hidden" >
      <div class="photo">
        <img src="../../assets/images/0c564cd1e226ff2f00c1142cd5eec8173c95f6f216e21-qFkXac_fw658.jpg">
      </div>
      <div class="content">
        <h2>钟小朋友</h2>
        <span>1460人关注</span>
        <p>大结局啦！！终于赶在大结局画完了，连反派也要萌萌哒才行#三生三世十里桃花#</p>
        <img src="../../assets/images/0402_2_03.jpg">
        <i class="liked">27</i><i class="comment">8</i>
      </div>
      <div class="attention" @click.stop.prevent="fn2()" :class="{ac:close}">{{txt}} </div>
      <div class="close" @click.stop.prevent="fn()">×</div>
    </li>
    <li class="clear_fix" v-show="hidden2">
      <div class="photo">
        <img src="../../assets/images/0ab2861e1f58526b2a22568e7ff9265cac63dfa421cba-lhosEg_fw658.jpg">
      </div>
      <div class="content">
        <h2>Smart Chic</h2>
        <span>20783人关注</span>
        <p>百事可乐将再度退出 Crystal Pepsi，7月&8月分别在加拿大和美国上架，这款透明版百事可乐早在1992年就出道，可惜销量不理想2年后既停产——其实我只想问：这装的是可乐还是七喜？</p>
        <img src="../../assets/images/timg.jpg">
        <i class="liked">13</i><i class="comment">8</i>
      </div>
      <div class="attention" @click.stop.prevent="fn4()" :class="{ac:close2}">{{txt1}} </div>
      <div class="close" @click.stop.prevent="fn3()">×</div>
    </li>

  </ul>
</template>

<script>
  export default{
    data(){
      return{
        txt:"关注",
        hidden:true,
        close:false,
        hidden2:true,
        close2:false,
        txt1:"关注"
      }
    },
    methods:{
      fn:function(){
          console.log(1);
          this.hidden=false;
      },
      fn2:function(){
        this.txt="已关注";
        this.close=true;
      },
      fn3:function(){
        console.log(1);
        this.hidden2=false;
      },
      fn4:function(){
        this.txt1="已关注";
        this.close2=true;
      }
    }
  }


</script>

<style>
  .user{padding-top: 3%;}
  .user li{padding: 5% 0;border-radius: 10px;margin-top: 3%;box-shadow: 0 0 26px -3px rgba(0,0,0,0.2);position: relative;}
  .user li .photo{height: 160px;width: 160px;border-radius: 50%;overflow: hidden;float: left;margin: 0 4% 0 4%;}
  .user li .photo img{height: 100%;width: 100%;}
  .user li .attention{height: 69px;width: 183px;background: #42bd56;color: #fff;position: absolute;top: 87px;right: 74px;border-radius: 10px;line-height: 69px;text-align: center;cursor: pointer;font-size: 32px;}
  .user li .ac{background: #fff;color: #9b9b9b;background:url("../../assets/images/ic_seti_discover_joined.png") no-repeat top 9px left -3px; width: 203px; }
  .user li .close{font-family: Consolas;font-size: 72px;color: #cccccc;width: 60px;height: 60px;position: absolute;top: 0;right: 0;line-height: 60px;text-align: center;padding: 1%;cursor: pointer;}
  .content{float: left;width: 66%;}
  .content h2{font-size: 44px;height: 76px;line-height: 76px;color: #494949;padding-top: 3%;}
  .content span{font-size: 30px;color: #9b9b9b;}
  .content p{font-size: 38px;padding-top: 6%;color: #494949;}
  .content img{padding-top: 3%;}
  .content i{display: inline-block;height: 50px;line-height: 50px;margin-top: 4%;font-size: 26px;color: #cccccc;width: 90px;text-align: right;}
  .content .liked{background: url("../../assets/images/ic_liked.png") no-repeat left -7px top -4px;}
  .content .comment{background: url("../../assets/images/ic_group_comment_0.png") no-repeat left 10px top -4px;margin-left: 3%;}

</style>
