import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home-page'
import Meetups from '@/components/meetup/meetups-page'
import CreateMeetup from '@/components/meetup/create-meetup-page'
import Profile from '@/components/user/profile-page'
import Signup from '@/components/user/signup-page'
import Signin from '@/components/user/signin-page'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/meetups', name: 'Meetups', component: Meetups },
    { path: '/meetups/new', name: 'CreateMeetup', component: CreateMeetup },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/signin', name: 'Signin', component: Signin },
  ]
})
