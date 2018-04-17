<template>
  <v-app>

    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark class="primary">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Meetup MD</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="menu in menuItems" :key="menu.title" :to="menu.link">
          <v-icon left>{{ menu.icon }}</v-icon>{{ menu.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view/>
    </main>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems() {
      if (this.userIsAuthenticated) {
        return [ { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
                 { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
                 { icon: 'person', title: 'Profile', link: '/profile' } ]
      } else {
        return [ { icon: 'face', title: 'Sign up', link: '/signup' },
                 { icon: 'lock_open', title: 'Sign in', link: '/signin' } ]
      }
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }

}
</script>


