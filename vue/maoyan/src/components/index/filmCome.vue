<template>
  <ul class="filmCome">
<!--   <li>
      <div class="img"></div>
      <h5>XXXXXX</h5>
      <span class="num">观众 <i>8.6</i></span>
      <span class="Introduction">XXXXXXXXXXXXXX</span>
      <span class="comingSoon">XXXXXXX</span>
    </li>-->
  </ul>
</template>

<script>

  export default{
    name:"filmCome",
    created:function() {
      $(function(){
      var url = "../../../static/film.json";
      var $filmCome = $(".filmCome");
      var code = "";
      $.get(url, null, function (data,textStatus) {
        if (textStatus == "success") {
          console.log(data.data);
          for (var k in data.data.movies) {
            code += "<li><div class='img'><img src='" + data.data.movies[k]["img"] + "'/></div><h5>"+data.data.movies[k]["nm"]+"</h5><span class='num'>观众 <i>"+data.data.movies[k]["sc"]+"</i></span><span class='Introduction'>"+data.data.movies[k]["scm"]+"</span><span class='comingSoon'>"+data.data.movies[k]["showInfo"]+"</span></li>"
          }
          $filmCome.html(code);
        }
      });
    })
    }
  }

</script>

<style>
  .filmCome{
    padding-left: 0.11rem;
    width: 4.03rem;
  }
  .filmCome li{
    height: 1.25rem;
    border-bottom: 0.01rem solid #e9e9e9;
    position: relative;
  }
  .filmCome li .img{
    height: 1rem;
    width: 0.7rem;
    float: left;
    margin:0.13rem 0.12rem 0 0;
  }
  .filmCome li .img img{
    height: 1rem;
    width: 0.7rem;
  }
  .filmCome li h5{
    font-size: 0.2rem;
    height: 0.35rem;
    line-height: 0.35rem;
    padding-top: 0.13rem;
  }
  .filmCome li span{
    display: block;
  }
  .filmCome li .num{
    font-size: 0.14rem;
    height: 0.22rem;
    line-height: 0.22rem;
    color: #898989;
  }
  .filmCome li .num i{
    font-size: 0.16rem;
    color: #fba854;
  }
  .filmCome li .Introduction{
    font-size: 0.14rem;
    height: 0.26rem;
    line-height: 0.26rem;
    color: #545454;
  }
  .filmCome li .comingSoon{
    font-size: 0.14rem;
    height: 0.14rem;
    line-height: 0.14rem;
  }
  .filmCome li:before{
    content: '购票';
    height: 0.28rem;
    width: 0.5rem;
    border: 0.01rem solid #db3c38;
    color: #db3c38;
    border-radius: 0.05rem;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.28rem;
    margin: 0.48rem 0.09rem 0 0;
  }
  .filmCome li:nth-child(5):before{
    content: '预售';
    color: #6854fa;
    border: 0.01rem solid #6854fa;
  }
</style>
