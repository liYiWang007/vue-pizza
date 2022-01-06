<template>
  <header class="app-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <!-- tag 属性可以自定义router-link标签 -->
      <router-link class="navbar-brand landing-brand" tag="div" to="/">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          enable-background="new 0 0 20 20"
          xml:space="preserve"
        >
          <path
            d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
          C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
          ></path>
          <path
            d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
          c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
          ></path>
          <path
            d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
          c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
          ></path>
        </svg>
        vue-2系统
      </router-link>
      <ul class="navbar-nav">
          <!-- <li><router-link to="/" class="nav-link">主页</router-link></li> -->
          <li><router-link :to="{name:'home'}" class="nav-link">主页</router-link></li>
          <li><router-link :to="{name:'menu'}" class="nav-link">菜单</router-link></li>
          <li><router-link :to="{name:'admin'}" class="nav-link">管理</router-link></li>
          <li><router-link :to="{name:'about'}" class="nav-link">关于我们</router-link></li>
      </ul>
      <ul class="navbar-nav ml-auto">
          <li><router-link :to="{name:'login'}" class="nav-link">登录</router-link></li>
          <li><router-link :to="{name:'register'}" class="nav-link">注册</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.app-header{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    .navbar{
        max-width: 1280px;
        margin: 0 auto;
    }

}
</style>
