<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <form @submit.prevent="onSignup">
              <v-card-title primary-title class="primary--text">
                <h2>Sign up </h2>
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
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="confirmPassword" label="Confirm Password" id="confirmPassword" v-model="confirmPassword" type="password" required :rules="[comparePasswords]"></v-text-field>
                    </v-flex>
                  </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" flat>Sign up</v-btn>                   
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
    name: 'signup-page',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords() {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : true
      },
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      onSignup() {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
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