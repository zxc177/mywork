<template>
  <header>
    <i>北京</i>
    <ul>
      <li>热映</li>
      <li>待映</li>
      <li>找片</li>
      <li class="last">热映</li>
    </ul>
  </header>
</template>

<script>

</script>

<style>
  header{
    height: 0.53rem;
    background: #db3c38;
    overflow: hidden;
  }
  header i{
    font-size: 0.18rem;
    float: left;
    color: #fff;
    padding-top: 0.14rem;
    padding-left: 0.22rem;
  }
  header ul{
    width: 1.8rem;
    height: 0.32rem;
    background: #c3352f;
    margin: 0 auto;
    margin-top: 0.07rem;
    border-radius:0.05rem ;
    position: relative;
  }
  header ul li{
    float: left;
    font-size: 0.14rem;
    line-height: 0.32rem;
    width: 0.6rem;
    text-align: center;
    color: #fff;
  }
  header ul .last{
    width: 0.6rem;
    position: absolute;
    height: 0.32rem;
    top: 0;
    left: 0;
    background: #fff;
    border-radius: 0.05rem;
    color: #db3c38;
  }

</style>
