<template>
  <div class="about">
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{ name: 'history' }">
            <a href="" class="list-group-item list-group-item-active">历史订单</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{ name: 'contact' }">
            <a href="" class="list-group-item list-group-item-active">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{ name: 'orderingGuide' }">
            <a href="" class="list-group-item list-group-item-active">点餐文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{ name: 'delivery' }">
            <a href="" class="list-group-item list-group-item-active">快递信息</a>
          </router-link>
        </div>
      </div>
      
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
