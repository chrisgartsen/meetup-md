import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { O_NONBLOCK } from 'constants';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    loadedMeetups: [
      { 
        imageUrl: 'https://www.tomb-photo.com/wp-content/uploads/2017/06/city-pictures-pexels-free-stock-photos-pertaining-to-free-stock-photos-new-york-city-skyline-1024x768.jpg', 
        id: 'nykey', 
        title: 'Meetup in New York',
        location: 'New York',
        date: new Date(),
        description: 'Wooot'
      },
      { 
        imageUrl: 'https://image.shutterstock.com/z/stock-photo-the-eiffel-tower-at-sunrise-in-paris-france-543790033.jpg', 
        id: 'pariskey', 
        title: 'Meetup in Paris',
        location: 'Paris',
        date: new Date(),
        description: 'Wooottotto'
      },
      { 
        imageUrl: 'https://thumbs.dreamstime.com/z/financial-district-city-london-aerial-cityscape-32891765.jpg', 
        id: 'londonkey', 
        title: 'Meetup in London',
        location: 'London',
        date: new Date(),
        description: 'Woooototto'
      },
    ],
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