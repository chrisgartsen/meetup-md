<template>
  <v-content>
    <v-container>
      <v-layout row v-if="error">
        <v-flex xs12 sm6 offset-sm3>
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <form @submit.prevent="onSignin">
              <v-card-title primary-title class="primary--text">
                <h2>Sign in </h2>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                    </v-flex>
                  </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>              
              <v-btn type="submit" color="primary" flat :disabled="loading" :loading="loading">
                Sign in
                <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
              </v-btn>                
            </v-card-actions>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'signin-page',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user() {
        return this.$store.getters.user
      },
      error() {
        return this.$store.getters.error
      },
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSignin() {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed() {
        this.$store.dispatch("clearError")
      }
 
    },
    watch: {
      user(value) {
        if(value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    }
  }
</script>