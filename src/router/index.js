import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Map from '../views/map/Map.vue'
import Operation from '../views/operation/Operation.vue'
import SoftwareHistory from '../views/history/SoftwareHistory.vue'
import DeviceHistory from '../views/history/DeviceHistory.vue'
import Login from '../views/login/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
  {
    path:'/login',
    name:'login',
    component:Login
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
  },
  {
    path:'/soft-history',
    name:'soft-history',
    component:SoftwareHistory,
  },
  {
    path:'/device-history',
    name:'device-history',
    component:DeviceHistory,
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
