import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import dashboard from '@/pages/dashboard'
import profile from '@/pages/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/dashboard', name: 'dashboard', component: dashboard },
    { path: '/profile', name: 'profile', component: profile }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {y: 0}
  }
})
