import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

export default new router({
  mode: 'history', //hash
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/survey/:id', name: 'survey', component: () => import('../views/Survey') },

    { path: '/adm', name: 'adm', component: () => import('../views/Adm') },
    { 
      path: '/surveylist', name: 'surveylist', component: () => import('../views/SurveyList'),
      children: [
        { path: '/surveylist/surveyedit/:id', name: 'surveyedit', component: () => import('../views/SurveyEdit') }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  ]
})
