import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/components/About'
import Services from '@/components/Services'
import Delivery from '@/components/Delivery'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/services',
      name: 'sevices',
      component: Services
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});
