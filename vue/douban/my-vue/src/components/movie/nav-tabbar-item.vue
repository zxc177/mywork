<template>
  <div class="moive_nav " @click="fn()" :class="{green:bol}">
    <slot></slot>
  </div>
</template>

<script>

  export default{
    props:["mark"],
    methods:{
      fn: function () {
        this.$emit("change",this.mark)
      }
    },
    computed:{
      bol(){
        if(this.mark==this.$parent.value){
          return true;
        }
      }
    }
  }
</script>

<style>
  .moive_nav{ float: left;text-align: center;width: 20%;font-size: 44px;cursor: pointer;border-bottom: 4px solid #fff;padding: 2% 0;font-family: "微软雅黑";font-weight: 400;color: #9b9b9b;}
  .green{border-bottom: 4px solid #42bd56;color: #42bd56;}

</style>

