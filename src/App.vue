<template>
  <div id="app">
    <div class="container">
      <AppHeader></AppHeader>
    </div>
      <router-view></router-view>
    <div class="container">
      <div class="row home-card">
        <div class="col-sm-12 col-md-4"><router-view name="orderingGuide"></router-view></div>
        <div class="col-sm-12 col-md-4"><router-view name="delivery"></router-view></div>
        <div class="col-sm-12 col-md-4"><router-view name="history"></router-view></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  list-style: none;
}
.home-card{
    .card{
        margin-top: 20px;
    }
}
#app{
    padding-top: 56px;
}
</style>
