<template>
  <v-content>
    <v-container>
      <v-layout row wrap> 
        <v-flex xs12>
          <v-card>
            <v-card-title><h4 class="primary--text">My Meetup</h4></v-card-title>
            <v-card-media src="https://www.tomb-photo.com/wp-content/uploads/2017/06/city-pictures-pexels-free-stock-photos-pertaining-to-free-stock-photos-new-york-city-skyline-1024x768.jpg" height="400px"></v-card-media>
            <v-card-text>
              <div class="info--text">2017/02/02 - The Place</div>
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
  name: 'meetup-page'
}
</script>
