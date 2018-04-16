import Vue from 'vue'
import Vuex from 'vuex'

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
    users: {
      id: 'djdjdjd',
      registeredMeetups: [
        'hfhahfah'
      ]
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({commit}, payload) {
      const meetup = {
        id: 'ajajajaj',
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      commit("createMeetup", meetup)
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
    }
  }
})