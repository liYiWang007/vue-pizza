<template>
  <div class="contact card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">李一</h4>
      <div class="card-text">255864373@qq.com</div>
      <router-link :to="{ name: 'personName' }">联系人</router-link>
      <router-link :to="{ name: 'phone' }">电话</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {}
  },
}
</script>

<style scoped></style>
