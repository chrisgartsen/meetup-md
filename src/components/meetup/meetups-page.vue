<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card class="info">
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media src="https://www.tomb-photo.com/wp-content/uploads/2017/06/city-pictures-pexels-free-stock-photos-pertaining-to-free-stock-photos-new-york-city-skyline-1024x768.jpg" height="130px"></v-card-media>
                </v-flex>
                <v-flex xs7 sm8 md9>
                  <v-card-title primary-title>
                    <div>
                      <h2 class="white--text mb-0">My Meetup</h2>
                      <div>2017/04/20</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat to="/meetups/1"><v-icon left light>arrow_forward</v-icon>View Meetup</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>  
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'meetups-page'
  }
</script>