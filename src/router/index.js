import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jade from '@/components/jade'
import Less from '@/components/less'
import Stylus from '@/components/stylus'
import Map from '@/components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jade',
      name: 'Jade',
      component: Jade
    },
    {
      path: '/less',
      name: 'Less',
      component: Less
    },
    {
      path: '/stylus',
      name: 'Stylus',
      component: Stylus
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
