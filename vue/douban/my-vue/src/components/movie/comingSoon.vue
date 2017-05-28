<template>
<div class="comingSoon">
    <h5>院线即将上映</h5>
    <div class="movies">
      <ul class="clear_fix">
      <li class="first">
        <div class="pic"><img src="../../assets/images/20173221490163432813_57.jpg"></div>
        <span>大话西游之大...</span>
        <div class="score clear_fix">
          <b>32229人想看</b>
        </div>
      </li>
      <li>
        <div class="pic"><img src="../../assets/images/38dbb6fd5266d016bb0289da9e2bd40735fa352c.jpg"></div>
        <span>速度于激情8</span>
        <div class="score clear_fix">
          <b>21530人想看</b>
        </div>
      </li>
      <li>
        <div class="pic"><img src="../../assets/images/e61190ef76c6a7efdf17e4affffaaf51f3de6601.jpg"></div>
        <span>指甲刀人魔</span>
        <div class="score clear_fix">
          <b>1734人想看</b>
        </div>
      </li>
      <li>
        <div class="pic"><img src="../../assets/images/b64543a98226cffc3b4e5872b0014a90f703ea8e.jpg"></div>
        <span>爱情冻住了</span>
        <div class="score clear_fix">
          <b>788人想看</b>
        </div>
      </li>
      <li>
        <div class="pic"><img src="../../assets/images/141403.43061352_270X405X4.jpg"></div>
        <span>玩命试爱</span>
        <div class="score clear_fix">
          <b>38人想看</b>
        </div>
      </li>
      <li>
        <div class="allOfIt">
          <span>全部</span>
          <p>91部</p>
        </div>
      </li>
    </ul>
  </div>
    <div class="more">更多></div>
    <div class="hidden"></div>
</div>
</template>

<script>

</script>

<style>
  .comingSoon{position: relative;border-bottom: 30px solid #f7f7f7;}
.comingSoon h5{font-size: 44px;font-family: "宋体";color: #494949;margin: 5% 0 0 4%;}
.comingSoon .movies{overflow: auto;min-width: 950px;padding-bottom: 4%;position: relative;}
  .comingSoon ul:before{color:gray;content: "04.14";height: 30px;width: 8%;font-size: 28px;background: #fff;position: absolute;top: 24px;left: 0;padding:  0 2% 0 4%;}
.comingSoon ul{margin-top: 4%;min-width:179%;overflow: hidden;padding-left: 4%;border-top: 2px solid #f7f7f7;padding-top: 4%;}
.comingSoon li{float: left;padding-left: 2%;}
.comingSoon .first{padding-left: 0;}
.comingSoon .pic{height: 376px;width: 255px;border: 1px solid #e7e7e7;}
.comingSoon .allOfIt{height: 261px;width: 255px;background: #f3f3f3;text-align: center;padding-top: 120px;}
.comingSoon .allOfIt span{display: inline-block;border-bottom: 2px solid #d7d7d7;color: #9c9c9c;margin-bottom: 8px;font-weight: normal;font-size: 36px;}
.comingSoon .allOfIt p{color: #9c9c9c;font-size: 30px;}
.comingSoon .pic img{height: 376px;width: 255px;}
.comingSoon li span{color: #494949;font-size: 36px;font-weight: bold;padding: 2% 0;display: block}
.comingSoon li .score{height: 32px;line-height: 32px;}
.comingSoon li .score img{float: left;height: 32px;width: 32px;padding-top: 2px;line-height: 32px;}
.comingSoon li .score b{font-size: 32px;color: #9b9b9b;padding:0 0 0 7px;height: 40px;line-height: 40px;}
.comingSoon .hidden{height: 4%;width: 140%;position: absolute;bottom: -5px;right: 0;background: #fff;z-index: 2;}
.comingSoon .more{position: absolute;top: 7px;right: 46px;font-size: 38px;font-family: Consolas;color: #71cd80;font-weight: bold;}
</style>
