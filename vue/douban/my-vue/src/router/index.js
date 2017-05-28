import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Movie from '../pages/Movie'
import Radio from "../pages/Radio"
import Group from "../pages/Group"
import Mine from "../pages/Mine"

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie
    },
    {
      path:"/radio",
      name:"Radio",
      component:Radio
    },
    {
      path:"/group",
      name:"Group",
      component:Group
    },
    {
      path:"/mine",
      name:"Mine",
      component:Mine
    }

  ]

})




//Router.push("/");
