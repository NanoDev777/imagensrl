import Layout from '../layout/Layout.vue'
import Dashboard from '../pages/dashboard/Dashboard.vue'

import Login from '../pages/auth/Login.vue'
import Graphics from '../pages/graphic/Graphic.vue'
import Reports from '../pages/reports/Report.vue'
import ShowProfile from '../pages/profile/Profile.vue'
import FormProfile from '../pages/profile/FormProfile.vue'
import Password from '../pages/profile/Password.vue'
import ShowCity from '../pages/city/ShowCity.vue'
import ShowBillboard from '../pages/billboard/ShowBillboard.vue'
import ListBillboard from '../pages/billboard/ListBillboard.vue'
import ShowAlert from '../pages/alert/ShowAlert.vue'
import FormAlert from '../pages/alert/FormAlert.vue'
import ListUsers from '../pages/user/ListUsers.vue'
import Administration from '../pages/billboard/Administration.vue'
import FormUser from '../pages/user/FormUser.vue'


export default [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/graphics',
        name: 'Graphics',
        component: Graphics
      },
      {
        path: '/billboards',
        name: 'Billboards',
        redirect: '/billboards',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            name: 'ListBillboard',
            component: ListBillboard
          },
          {
            path: ':slug',
            name: 'ShowCity',
            component: ShowCity,
            props: true
          }
        ]
      },
      {
        path: '/reports',
        name: 'Reports',
        component: Reports
      },
      {
        path: '/alert',
        name: 'Alert',
        redirect: '/alert',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            name: 'ShowAlert',
            component: ShowAlert
          },
          {
            path: 'edit',
            name: 'EditAlert',
            component: FormAlert
          }
        ]
      },
      {
        path: '/profile',
        name: 'Profile',
        redirect: '/profile',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            name: 'ShowProfile',
            component: ShowProfile
          },
          {
            path: ':id/edit',
            name: 'EditProfile',
            component: FormProfile
          },
          {
            path: ':id/password',
            name: 'Password',
            component: Password
          }
        ]
      },
      {
        path: '/users',
        name: 'Users',
        redirect: '/users',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            name: 'ListUsers',
            component: ListUsers
          },
          {
            path: 'create',
            name: 'CreateUser',
            component: FormUser
          },
          {
            path: ':id/edit',
            name: 'EditUser',
            component: FormUser
          }
        ]
      },
      {
        path: '/administration',
        name: 'Administration',
        redirect: '/administration',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '',
            name: 'Admin',
            component: Administration
          }
        ]
      }
    ]  
  },
  {
    path: '/360',
    name: '360',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: ':uuid',
        name: 'ShowBillboard',
        component: ShowBillboard,
        props: true
      }
    ]
  },
  {
    path: '/login', 
    name: 'login', 
    component: Login, 
    meta: { 
      redirectIfLogged: true 
    } 
  },
  { path: '*', name: '404', component: require('../components/404.vue') }
]
