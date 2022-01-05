<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎大家来看大标题</h1>
          <h3>这是小标题</h3>
          <button class="btn btn-success" @click="goToMenu">Let's order</button>
        </div>
      </div>
    </div>
    <div class="scrollbehavior" style="z-index:99;margin-top:40vh;margin-bottom:80vh;color:#fff;background:red;">测试滚动行为</div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goToMenu() {
      // 跳转上次浏览页面
      // this.$router.go(-1);
      //跳转指定页面
      //this.$router.replace('/menu')
      //跳转指定路由name
      //this.$router.replace({name:'menuLink'})

      //最常用的是push
      this.$router.push("/menu");
      //this.$router.push({name:'menuLink'})
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 10%;
  height: 85vh;
  background: url("../assets/images/pizza.jpg") no-repeat center center;

  h1,
  h3 {
    margin: 6%;
  }
  .background {
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
    background: #eee;
    opacity: 0.8;
  }
  .home-in {
    background: #000;
  }
}
</style>
