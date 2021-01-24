import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Consultation from '../views/Consultation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/Questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/Consultation',
    name: 'Consultation',
    component: Consultation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
