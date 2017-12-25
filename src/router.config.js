import home from "./components/home.vue";
import photo from "./components/photo.vue";
import about from "./components/about.vue";
import join from "./components/join.vue";
// import like from "./components/photo.vue";
import contact from "./components/contact.vue";
import login from "./components/login.vue";
import reg from "./components/reg.vue";
import detail from "./components/detail.vue";
import shopcart from "./components/shopcart.vue";
import status from "./components/status.vue";



let routes = [
    {path:"/home",name:"首页",component:home},
    // {path:"/home",component:(resolve)=>{require(["./components/home.vue"],resolve)}}
    {path:"/",name:"首页/",redirect:"/home"},
    {path:"*",name:"首页*",redirect:"/"},
    {path:"/photo",name:"相册",component:photo},
    {path:"/about",name:"关于我们",component:about},
    {path:"/join",name:"加入我们",component:join},
    {path:"/like",name:"新族系列",component:photo},
    {path:"/contact",name:"联系我们",component:contact},
    {path:"/login",name:"登录",component:login},
    {path:"/reg",name:"注册",component:reg},
    {path:"/detail/:id",name:"更多/详情",component:detail},
    {path:"/shopcart",name:"购物车",component:shopcart},
    {path:"/status",name:"登录注册提示",component:status}
];

export default {
    routes:routes,
    // mode:'history',

  }