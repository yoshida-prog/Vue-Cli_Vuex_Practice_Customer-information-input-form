import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Consultation from '../views/Consultation.vue'
import Check from '../views/Check.vue'

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
  },
  {
    path: '/Check',
    name: 'Check',
    component: Check
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
