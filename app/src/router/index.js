/* ****************************************************************
*************************** ROUTING *******************************
*******************************************************************

Here it is set the routes for the links in the HEADER page.*/

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/News/user',
    name: 'NewsClient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsClient.vue')
  },
  {
    path: '/News/admin',
    name: 'NewsAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
