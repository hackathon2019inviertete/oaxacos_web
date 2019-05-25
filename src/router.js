import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import btnCute from './views/About.vue'
import SignUp from './views/signUp.vue'
import SignIn from './views/signIn.vue'
import Reports from './views/Reports.vue'
import ReportDetails from './views/ReportDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: btnCute
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/reports/:id',
      name: 'ReportDetails',
      component: ReportDetails
    }
  ]
})
