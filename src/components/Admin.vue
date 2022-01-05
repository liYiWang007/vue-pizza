<template>
  <div>admin</div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
        aname: 'aname在数据渲染后才出现'
    };
  },
  //beforeRouteEnter: (to, from, next) => {
    //   数据渲染前执行，所以拿不到aname
    // alert("Hello，" + this.aname);
    //
    // next里写回调  异步vm=>{}，在数据渲染后执行以下操作
    //next(vm=>{
    //     alert("这里看清楚是vm前缀:" + vm.aname)
    // })
  //},
//   beforeRouteLeave:(to, from, next)=>{
//       //beforeRouteLeave 跳转前的操作
//       if(confirm("未保存，确定离开当前页面吗？")==true){
//           next()
//       }else{
//           next(false)
//       }
//   }
};
</script>

<style scoped></style>
