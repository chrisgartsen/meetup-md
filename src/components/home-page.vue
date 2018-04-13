<template>
  <v-content>
    <v-container>
      <v-layout row wrap align-center justify-center class="mb-2">
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left ">
          <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 >
          <v-carousel>
            <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageUrl" @click.native="onLoadMeetup(meetup.id)">
              <div class="cartitle">{{ meetup.title }}</div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center class="mt-2" >
        <v-flex xs12 class="text-xs-center">
          <p>Join our awesome meetups.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      meetups: [
        { imageUrl: 'https://www.tomb-photo.com/wp-content/uploads/2017/06/city-pictures-pexels-free-stock-photos-pertaining-to-free-stock-photos-new-york-city-skyline-1024x768.jpg', id: 'hfhahfah', title: 'Meetup in New York'},
        { imageUrl: 'https://image.shutterstock.com/z/stock-photo-the-eiffel-tower-at-sunrise-in-paris-france-543790033.jpg', id: 'hfhahjjfah', title: 'Meetup in Paris'},
        { imageUrl: 'https://thumbs.dreamstime.com/z/financial-district-city-london-aerial-cityscape-32891765.jpg', id: 'hfhhhhahjhjfah', title: 'Meetup in London'},
      ]
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
  .cartitle {
    color: white;
    position: absolute;
    bottom: 50px;
    font-size: 2em;
    left: 50%;
    transform: translate(-50%,0);
  }
</style>

