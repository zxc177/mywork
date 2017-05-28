<template>
    <div class="icon" @click="fn()">
        <span v-show="!bol"><slot name="normal-img"></slot></span>
        <span v-show="bol"><slot name="active-img"></slot></span>
        <span :class="{color:bol}"><slot></slot></span>
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
    float: left;text-align: center;width: 20%;font-size: 26px;border-top: 2px solid lightgrey;cursor: pointer;color: #929292;
  }
  .color{color:#42BD56;}
  a{text-decoration: none;color: #999;}

</style>


