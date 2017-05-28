<template>
  <div class="cinema">
    <h5>影院热映</h5>
    <div class="movies">
      <ul class="clear_fix">
        <li class="first">
          <div class="pic"><img src="../../assets/images/7af40ad162d9f2d37d2fe238a0ec8a136327cc2f.jpg"></div>
          <span>攻壳机动队</span>
          <div class="score clear_fix">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_small_half.png">
            <img src="../../assets/images/rating_star_small_off.png">
            <b>6.8</b>
          </div>
        </li>
        <li>
          <div class="pic"><img src="../../assets/images/29381f30e924b89954f95aba67061d950b7bf66f.jpg"></div>
          <span>金刚: 骷髅岛</span>
          <div class="score clear_fix">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_small_half.png">
            <img src="../../assets/images/rating_star_small_off.png">
            <b>6.8</b>
          </div>
        </li>
        <li>
          <div class="pic"><img src="../../assets/images/d058ccbf6c81800a2dfbd223b83533fa828b4784.jpg"></div>
          <span>一念无明</span>
          <div class="score clear_fix">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_small_off.png">
            <b>7.3</b>
          </div>
        </li>
        <li>
          <div class="pic"><img src="../../assets/images/4b90f603738da977effa9be9b951f8198718e31f.jpg"></div>
          <span>点五步</span>
          <div class="score clear_fix">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_small_half.png">
            <img src="../../assets/images/rating_star_small_off.png">
            <b>6.4</b>
          </div>
        </li>
        <li>
          <div class="pic"><img src="../../assets/images/38dbb6fd5266d016bb0289da9e2bd40735fa352c.jpg"></div>
          <span>速度与激情8</span>
          <div class="score clear_fix">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_card_on.png">
            <img src="../../assets/images/rating_star_small_off.png">
            <b>8.4</b>
          </div>
        </li>
        <li>
          <div class="allOfIt">
            <span>全部</span>
            <p>24部</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="more">更多></div>
    <div class="hidden"></div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>
  .cinema{border-top:22px solid #f7f7f7;position: relative;border-bottom: 32px solid #f7f7f7; }
  .cinema h5{font-size: 44px;font-family: "宋体";color: #494949;margin: 5% 0 0 4%}
  .cinema .movies{overflow: auto;min-width: 950px;padding-bottom: 4%;}
  .cinema ul{margin-top: 4%;min-width:179%;overflow: hidden;padding-left: 4%}
  .cinema li{float: left;padding-left: 2%;}
  .cinema .first{padding-left: 0;}
  .cinema .pic{height: 376px;width: 255px;border: 1px solid #e7e7e7;}
  .cinema .allOfIt{height: 261px;width: 255px;background: #f3f3f3;text-align: center;padding-top: 120px;}
  .cinema .allOfIt span{display: inline-block;border-bottom: 2px solid #d7d7d7;color: #9c9c9c;margin-bottom: 8px;font-weight: normal;font-size: 36px;}
  .cinema .allOfIt p{color: #9c9c9c;font-size: 30px;}
  .cinema .pic img{height: 376px;width: 255px;}
  .cinema li span{color: #494949;font-size: 36px;font-weight: bold;padding: 2% 0;display: block}
  .cinema li .score{height: 32px;line-height: 32px;}
  .cinema li .score img{float: left;height: 32px;width: 32px;padding-top: 2px;line-height: 32px;}
  .cinema li .score b{font-size: 30px;color: #9b9b9b;padding:0 0 0 7px;height: 30px;}
  .cinema .hidden{height: 4%;width: 140%;position: absolute;bottom: -5px;right: 0;background: #fff;z-index: 2;}
  .cinema .more{position: absolute;top: 57px;right: 46px;font-size: 38px;font-family: Consolas;color: #71cd80;font-weight: bold;}
</style>
