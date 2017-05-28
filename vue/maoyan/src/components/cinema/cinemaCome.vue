<template>
  <ul class="cinemaCome">
   <!-- <li class="children">
      <h5>XXXXXX<i>14</i><span>元起</span></h5>
      <span class="address">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
      <ul><li>座</li><li>退</li><li>改签</li><li class='eat'>小吃</li></ul><span class='pri'><i>惠</i>记忆大师特惠</span>
    </li>-->
  </ul>
</template>

<script>
  export default{
    name:"cinemaCome",
    created:function(){
      $(function(){
        var url="../../../static/cinema.json";
        var $cinemaCome=$(".cinemaCome");
        var code="";
        $.get(url,null,function(data,textStatus){
          if(textStatus=="success"){
            for(var k in data.data.HDQ){
              code+="<li class='children'><h5>"+data.data.HDQ[k]["nm"]+"<i>"+data.data.HDQ[k]["sellPrice"]+"</i><span>元起</span></h5><span class='address'>"+data.data.HDQ[k]["addr"]+"</span><ul><li>座</li><li>退</li><li>改签</li><li class='eat'>小吃</li></ul><span class='pri'><i>惠</i>记忆大师特惠</span></li>"
            }
           $cinemaCome.html(code)
          }
        })
      })
    }
  }
</script>

<style>
  .cinemaCome{
    padding-left: 0.11rem;
    width: 4.03rem;
  }
  .cinemaCome .children{
    height: 1.31rem;
    border-bottom: 0.01rem solid #e9e9e9;
    padding-left: 0.05rem;
  }
  .cinemaCome .children h5{
    height: 0.2rem;
    line-height: 0.2rem;
    font-size: 0.18rem;
    padding-top: 0.17rem;
  }
  .cinemaCome .children h5 i{
    font-size: 0.18rem;
    padding-left: 0.08rem;
    color: #b6342e;
  }
  .cinemaCome .children h5 span{
    font-size: 0.14rem;
    color: #9d9d9e;
  }
  .cinemaCome .children .address{
    display: block;
    font-size: 0.16rem;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 3.15rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    color: #494949;
  }
  .cinemaCome .children ul{
    height: 0.18rem;
  }
  .cinemaCome .children ul li{
    float: left;
    font-size: 0.14rem;
    border: 0.01rem solid #74a2aa;
    border-radius: 0.02rem;
    line-height: 0.16rem;
    text-align: center;
    padding: 0.02rem;
    color:#74a2aa ;
    margin-right: 0.03rem;
  }
  .cinemaCome .children ul .eat{
    color: #fc9000;
    border: 0.01rem solid #fc9000;
  }
  .cinemaCome .children .pri{
    display: block;
    height: 0.18rem;
    margin-top: 0.1rem;
    font-size: 0.14rem;
    color: #9b9b9b;
  }
  .cinemaCome .children .pri i{
    font-size: 0.14rem;
    float: left;
    height: 0.18rem;
    width: 0.18rem;
    background: #f89800;
    color: #fff;
    text-align: center;
    line-height: 0.18rem;
    border-radius: 0.02rem;
    margin-right: 0.06rem;
  }

</style>
