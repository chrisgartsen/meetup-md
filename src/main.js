// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

// Firebase
import * as firebase from 'firebase'

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

// Helper files
import '@/filters/date-format'

import alert from '@/components/shared/alert'

Vue.component('app-alert', alert)

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1,
    accent: colors.red.accent2,
    secondary: colors.grey.lighten1,
    info: colors.blue.lighten1,
    warning: colors.amber.darken2,
    error: colors.red.accent4,
    success: colors.green.lighten2
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyB5C4BQUNtzN0s09EyBo3h8Fgmu2ZIaHvI",
      authDomain: "meetup-md.firebaseapp.com",
      databaseURL: "https://meetup-md.firebaseio.com",
      projectId: "meetup-md",
      storageBucket: "meetup-md.appspot.com",
    })
  }
})
