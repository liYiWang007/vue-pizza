
import Home from "../components/Home";
import Menu from "../components/Menu";
import About from "../components/about/About";
import Register from "../components/Register";
import Login from "../components/Login";
import Admin from "../components/admin/Admin";

// 二级路由
import Delivery from "../components/about/Delivery";
import History from "../components/about/History";
import OrderingGuide from "../components/about/OrderingGuide";
import Contact from "../components/about/contact/Contact";

// 三级路由
import Phone from "../components/about/contact/Phone";
import PersonName from "../components/about/contact/PersonName";



// 在这里记得加export
export const routes = [
    { name: "home", path: "/", component: Home ,components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    { name: "menu", path: "/menu", component: Menu },
    {
      name: "about",
      path: "/about",
      redirect: "/contact",
      component: About,
      children: [
        { name: "delivery", path: "/delivery", component: Delivery },
        { name: "history", path: "/history", component: History },
        {
          name: "orderingGuide",
          path: "/orderingGuide",
          component: OrderingGuide
        },
        {
          name: "contact",
          path: "/contact",
          redirect: "/contact/phone",
          component: Contact,
          children: [
            { name: "phone", path: "/contact/phone", component: Phone },
            {
              name: "personName",
              path: "/contact/personName",
              component: PersonName
            }
          ]
        }
      ]
    },
    { name: "admin", path: "/admin", component: Admin },
    { name: "register", path: "/register", component: Register },
    { name: "login", path: "/login", component: Login },
    { path: "*", redirect: "/" }
  ];