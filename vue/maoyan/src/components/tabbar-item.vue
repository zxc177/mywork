<template>
  <div class="icon" @click="fn()">
    <span v-show="!bol"><slot name="normal-img"></slot></span>
    <span v-show="bol"><slot name="active-img"></slot></span>
    <span :class="{color:bol}" class="cg"><slot></slot></span>
  </div>
</template>

<script>
  export default{
    props:["mark"],
    methods:{
      fn:function(){
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
  .icon{
    float: left;
    text-align: center;
    width: 25%;
    font-size:0.12rem;
    border-top:0.01rem solid #b7b7b7;
    cursor: pointer;
    color: #929292;
    background: #f8f8f8;
    padding: 0.04rem 0 0.03rem;
  }
  .color{
    color: #e13328;
  }
  .cg{
    padding-right: 0.02rem;
  }


</style>
