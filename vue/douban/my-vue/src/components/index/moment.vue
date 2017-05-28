<template>
    <div>
    <div class="moment">
      <h2 class="moment_h2" >一刻</h2>
      <h3 class="moment_h3">广播精选丨同事分享了一则她的小趣事</h3>
      <p class="moment_p">平时我早上洗漱化妆，李狗都在洗手间外垫子上趴着陪我。</p>
      <span class="moment_span">作者:&nbsp&nbsp豆瓣</span>
      <img  class="moment_img" src="../../assets/images/Screenshot_2017-02-23-10-19-04_06.jpg">
      <i>来自栏目: 广播精选</i>
    </div>
    <div class="moment">
      <h3 class="moment_h3">摄影有温度丨原来她才是最会穿的女文青</h3>
      <p class="moment_p">每天想你一次，天上飘落一粒沙，从此形成了撒哈拉。</p>
      <span class="moment_span">作者:&nbsp&nbsp豆瓣摄影</span>
      <img  class="moment_img img2" src="../../assets/images/u=2018132473,3477567654&fm=23&gp=0.jpg">
      <i>来自栏目: 摄影有温度</i>
    </div>
    </div>

</template>

<script>
  export default{

  }
</script>

<style>

  .moment{position: relative;padding-bottom: 3%;border-top:3px solid #f2f1ee;}
  .moment_h2{border-left:12px solid #42bd56;font-size:38px;font-weight:normal;font-family:"微软雅黑";height:54px;padding-left:2%;color: #7a7a7a;margin-top:4%;}
  .moment_h3{color: #9b9b9b;font-size: 48px;font-family: "微软雅黑";line-height: 54px;height: 108px;padding:4% 40% 0 5%}
  .moment_p{font-size: 38px;color:#a5a5a5;display: block;line-height: 48px;font-family: "微软雅黑";padding: 3% 40% 0 5%;}
  .moment_span{position:relative;font-size: 38px;font-family: Arial,"宋体";color: #ccc;height: 34px;line-height: 34px;padding: 9% 0 0 5%;display: inline-block;}
  .moment_span:before{content: '';height: 1px;width: 60px;background: #bcbcbc;position: absolute;top: 48px;left: 49px;}
  .moment_img{position: absolute;top:129px;right: 50px;font-size: 0;height: 260px;width: 260px;}
  .img2{position: absolute;top:50px;right: 50px;}
  .moment i{position: absolute;bottom: 31px;right: 45px;font-size: 38px;font-family: "宋体";color: #ccc;height: 34px;line-height: 34px;font-style: normal;}
</style>

