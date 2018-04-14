<template>
  <v-content>
    <v-container>
      <v-layout row wrap> 
        <v-flex xs12>
          <v-card>
            <v-card-title><h4 class="primary--text">{{ meetup.title }}</h4></v-card-title>
            <v-card-media :src="meetup.imageUrl" height="400px"></v-card-media>
            <v-card-text>
              <div class="info--text">{{ meetup.date }} - The Place</div>
              <div>JFahfk ha fkjafh fakjh fak hfakj kjha afkhj af</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'meetup-page',
  props: {
    id: {
      required: true
    }
  },
  computed: {
    meetup() {
      console.log("Parameters " + this.id)
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
