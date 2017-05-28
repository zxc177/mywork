
<template>
   <div class="search">
     <form>
       <button type="button" class="ic_search"></button>
       <input type="text" placeholder="影视 图书 唱片 小组 舞台剧登">
       <button type="button" class="ic_scan"></button>
     </form>
     <img src="../../assets/images/ic_chat_white.png" class="wechat">
   </div>
</template>


<script>
  export default{

  }
</script>


<style>
.search{width: 100%;height: 142px;background: #42BD56;position: relative}
.search button{border: none;outline: none;}
.search form{height: 100%;}
.search .ic_search{height: 51px ;width: 51px;background: url("../../assets/images/ic_search_gray.png") no-repeat;position: absolute;top: 35%;left: 4%;}
.search input{width: 64%;height: 64%;border-top: none;font-size: 36px;border-radius:12px;margin: 3% 0 0 2%;padding: 0 8%;font-family: "微软雅黑";}
.search .ic_scan{height: 51px;width: 51px;background: url("../../assets/images/ic_scan_gray.png") no-repeat;position: absolute;top: 36%;right: 21%;}
.search .wechat{height:60px;width:60px;position: absolute;top: 35%;right: 6%;}
</style>
