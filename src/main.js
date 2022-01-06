import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from 'axios'

import { routes } from "./router/index.js";
//以下内容都放到router文件夹内
// import Home from "./components/Home";
// import Menu from "./components/Menu";
// import About from "./components/about/About";
// import Admin from "./components/Admin";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import error from "./components/404";

// 二级路由
// import Contact from "./components/about/contact/Contact";
// import Delivery from "./components/about/Delivery";
// import History from "./components/about/History";
// import OrderingGuide from "./components/about/OrderingGuide";

Vue.use(VueRouter);

axios.defaults.baseURL='https://vue-pizza-cdef2-default-rtdb.firebaseio.com/'

//注意 直接写在main.js里的不用加 export
// const routes = [
//   { path: "/", name: "homeLink", component: Home },
//   { path: "/menu", name: "menuLink", component: Menu },
//   {
//     path: "/about",
//     name: "aboutLink",
//     redirect: "/about/contact", //如果没这个路径就会跳转回redirect默认展示页面
//     component: About,
//     children: [
//       {
//         path: "/about/contact",
//         name: "contactLink",
//         component: Contact
//       },
//       {
//         path: "/about/delivery",
//         name: "deliveryLink",
//         component: Delivery
//       },
//       {
//         path: "/about/history",
//         name: "historyLink",
//         component: History
//       },
//       {
//         path: "/about/orderingGuide",
//         name: "orderingGuideLink",
//         component: OrderingGuide
//       }
//     ]
//   },
//   {
//     path: "/admin",
//     name: "adminLink",
//     component: Admin,
//     // beforeEnter: (to, from, next) => {
//     //   //普通导航守卫
//     //   //alert("非登录状态，不能访问此页面");
//     //   //next(false); //false会留在原地

//     //   //判断store.getters.isLogin === false
//     //   if (to.path === "/login" || to.path === "/register") {
//     //     next();
//     //   } else {
//     //     alert("我是导航守卫，没登录会跳到登录页");
//     //     next("/login");
//     //   }
//     // }
//   },
//   { path: "/login", name: "loginLink", component: Login },
//   { path: "/register", name: "registerLink", component: Register },
//   //   { path: "*", component: error }
//   { path: "*", redirect: "/" }
// ];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savePosition) {
    //打开滚动到指定位置
    //   return { x:0, y:140 }
    // 打开滚动到指定div
    // return { selector: ".scrollbehavior" };
    if (savePosition) {
      return savePosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// 全局守卫 to=进入哪个路由、from=从哪个路由离开、next将展示的路由页面
//前置钩子
// router.beforeEach((to, from, next) => {
//   //alert("还没有登录，请先登录!");
//   //next();

//   //判断store.getters.isLogin === false
//   console.log(to);
//   if (to.path === "/login" || to.path === "/register") {
//     next();
//   } else {
//     // alert("还没有登录，请先登录!");
//     // next('/login');
//     next();
//   }
// });

//后置钩子，不常用
// router.afterEach((to,from)=>{
//     console.log("我是后置钩子 afterEach")
// })

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
