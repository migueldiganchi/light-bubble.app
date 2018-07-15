import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import dashboard from '@/pages/dashboard'
import newBubble from '@/pages/new-bubble'
import bubbles from '@/pages/bubbles'
import bubble from '@/pages/bubble'
import profile from '@/pages/profile'

import signin from '@/pages/auth/signin'
import signup from '@/pages/auth/signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/signin', name: 'signin', component: signin },
    { path: '/signup', name: 'signup', component: signup },
    { path: '/dashboard', name: 'dashboard', component: dashboard },
    { path: '/new', name: 'new', component: newBubble },
    { path: '/profile', name: 'profile', component: profile },
    { path: '/bubbles', name: 'bubbles', component: bubbles },
    { path: '/bubble/:id', name: 'bubble', component: bubble }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {y: 0}
  }
})
