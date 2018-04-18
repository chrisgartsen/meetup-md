import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { O_NONBLOCK } from 'constants';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    loadedMeetups: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
  },
  actions: {
    loadMeetups({commit}) {
      commit("setLoading", true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for(let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location
            })
          }
          commit('setLoadedMeetups', meetups)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          commit("setLoading", false)
        })
    },
    createMeetup({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString()
      }
      firebase.database().ref('meetups').push(meetup)
        .then((data) =>{
          console.log(data)
          const key = data.key

          commit("createMeetup", {
            ...meetup,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserUp({commit}, payload) {
      commit("setLoading", true)
      commit("clearError")
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          console.log(error)
          commit("setError", error)
        })
        .finally(() => {
          commit("setLoading", false)
        })
    },
    signUserIn({commit}, payload) {
      commit("setLoading", true)
      commit("clearError")
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          console.log(error)
          commit("setError", error)
        })
        .finally(() => {
          commit("setLoading", false)
        })
    },
    autoSignin( {commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredMeetups: []
      })
    },
    logout({commit}) {
      firebase.auth().signOut()
      commit("setUser", null)
    },
    clearError({commit}) {
      commit("clearError")
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups//.sort((meetupA, meetupB) => { return meetupA.date > meetupB.date})
    }, 
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0,3)
    },
    loadedMeetup(state) {
      return ((meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id == meetupId
        })
      })
    },
    user(state) {
      return state.user
    },
    error(state) {
      return state.error
    },
    loading(state) {
      return state.loading
    }
  }
})