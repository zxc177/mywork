<template>
  <div class="search">
    <div class="input">
      <div class="icon_index"></div>
      找影视剧、影人、影院
    </div>
  </div>
</template>

<script>

</script>

<style>
  .search{
    height: 0.43rem;
    width: 100%;
    background: #db3c38;
    margin-top: -0.01rem;
    overflow: hidden;
  }
  .search .input{
    width: 3.93rem;
    height: 0.31rem;
    background: #fff;
    border-radius:0.25rem;
    margin: 0.04rem auto;
    text-align: center;
    line-height: 0.31rem;
    font-size: 0.14rem;
    color: #ccc;
    position: relative;
  }
  .search .input .icon_index{
    height: 0.15rem;
    width: 0.15rem;
    background: url("../../assets/images/search.png") no-repeat;
    background-size:cover ;
    position: absolute;
    top: 0.08rem;
    left: 1.05rem;
  }
</style>
