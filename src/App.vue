<template>
  <v-app>
    <v-toolbar dense dark tab  height="30px">
      <v-tabs centered slider-color="white" show-arrows height="30px">
        <v-tab>
          <v-btn small flat to="/">Home</v-btn>
        </v-tab>
        <v-tab>
          <v-btn small flat to="/portfolio">Portfolio</v-btn>
        </v-tab>
        <v-tab>
          <v-btn small flat to="/contact">Contact</v-btn>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-container fluid px-0 py-0>
      <router-view/>
    </v-container>
    <v-footer>
      <v-spacer></v-spacer>
      <span>Photos by Anthony (TJ) Edens &copy; {{new Date().getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Anthony Edens'
    }
  },
  name: 'App'
}
</script>
