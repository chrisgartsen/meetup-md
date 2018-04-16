<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h2 class="secondary--text">Create a new Meetup</h2>
        </v-flex>  
      </v-layout>    
      <v-layout row>
        <v-flex xs12>  
          <form @submit.prevent="onCreateMeetup">
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="title" label="Title" id="title" required v-model="title"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="location" label="Location" id="location" required v-model="location"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="imageUrl" label="Image URL" id="image-url" required v-model="imageUrl"></v-text-field>
              </v-flex>
            </v-layout>
              <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <img :src="imageUrl" width="100%">
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="description" label="Description" id="description"  multi-line v-model="description"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <h4>Choose a date</h4>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3 mb-2>
                <v-date-picker v-model="date"></v-date-picker>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn color="primary" :disabled="!formIsValid" type="sumbit">Create Meetup</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>   
  </v-content>
</template>

<script>
  export default {
    name: 'create-meetup-page',
    data() {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: null
      }
    },
    computed: {
      formIsValid() {
        return this.title !== '' && this.location !== '' && this.imageUrl !== ''
      },
      submittableDate() {
        const date = new Date(this.date)
        return date
      }
    },
    methods: {

      onCreateMeetup() {
        if(!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.submittableDate
        }
        this.$store.dispatch("createMeetup", meetupData)
        this.$router.push("/meetups")
      }
    }
  }
</script>