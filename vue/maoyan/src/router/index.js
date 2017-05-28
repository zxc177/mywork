import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Cinema from '../pages/Cinema'
import Find from '../pages/Find'
import Mine from '../pages/Mine'
import BufferPage from "../pages/bufferPage.vue"


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/cinema',
      name: 'Cinema',
      component:Cinema
    },{
      path: '/find',
      name: 'Find',
      component:Find
    },{
      path: '/mine',
      name:"Mine",
      component:Mine
    },{
      path:"/bufferPage",
      name:"BufferPage",
      component:BufferPage
    }
  ]

})




//Router.push("/index");
