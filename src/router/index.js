import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
// import Home from '../views/Home.vue'
// import Customer from '../views/Customer/Customer.vue'
// import CustomerSite from '../views/Customer/CustomerSite.vue'
// import CustomerSystem from '../views/Customer/CustomerSystem.vue'
// import CustomerHome from '../views/Customer/CustomerHome.vue'
// import Site from '../views/Site/Site'
// import SiteSetting from '../views/Site/SiteSetting'
// import SiteUser from '../views/Site/SiteUser'
// import SiteRoomShelf from '../views/Site/SiteRoomShelf'
// import SiteBin from '../views/Site/SiteBin'
// import SiteItem from '../views/Site/SiteItem'
// import SiteTransaction from '../views/Site/SiteTransaction'
// import DashBoard from '../views/Dashboard/Dashboard.vue'
import Home from '../views/home/Home.vue'
import Map from '../views/map/Map.vue'
import Operation from '../views/operation/Operation.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
//   {
//     path: '/login',
//     name: 'login',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: Login
//   },
  {
    path:'/map',
    name:'map',
    component:Map,
  },
  {
    path:'/operation',
    name:'operation',
    component:Operation,
  }
//   {
//     path:'/dashboard',
//     name:'dashboard',
//     component:DashBoard,
//   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
