<template>
  <v-content>
    <v-container>
      <v-layout row wrap align-center justify-center class="mb-2">
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left ">
          <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center v-if="loading">
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular indeterminate class="primary--text" :width="7" :size="70"></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center v-if="!loading">
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageUrl" @click.native="onLoadMeetup(meetup.id)" style="cursor: pointer">
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
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups
    },
    loading() {
      return this.$store.getters.loading
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

