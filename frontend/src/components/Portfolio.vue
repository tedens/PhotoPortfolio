<template>
  <v-container fluid id="main_container">
      <v-layout>
          <v-flex>
              <h3 class="display-3 text-xs-center">Portfolio</h3>
          </v-flex>
      </v-layout>
      <v-layout mx-2 elevation-6>
          <v-flex>
            <v-card>
                <v-container fluid row wrap py-0>
                    <v-layout row wrap>
                        <v-flex xs3 my-0 pr-2>
                            <v-select v-model="search" label="Categories" my-0 py-0
                            :items="categories"></v-select>
                        </v-flex>
                        <v-flex px-2>
                            <v-text-field prepend-icon="search" label="Search" hide-details single-line></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
          </v-flex>
      </v-layout>
      <v-layout>
          <v-flex>
            <v-container fluid px-0>
                <v-layout row wrap>
                    <v-flex
                    xs4
                    v-for="(image,i) in images"
                    :key="i"
                    px-2 py-2
                    >
                        <v-card flat tile>
                            <v-card-media
                            :src="image"
                            height="400px"
                            >
                            </v-card-media>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['apiUrl'],
  data: () => ({
    images: [],
    categories: ['All'],
    search: 'All',
    loading: true
  }),
  watch: {
    search: 'getSpecificPhotos'
  },
  methods: {
    async getPhotos () {
      this.clearImages()
      var temp = await this.axios.get(this.$root.apiUrl + 'photos')
      for (var x of temp.data.response) {
        this.images.push(this.$root.cdnUrl + x)
      }
    },
    async getSpecificPhotos (event) {
      if (event === 'All') {
        this.getPhotos()
      } else {
        var temp = await this.axios.post(this.$root.apiUrl + 'photos', {'category': event})
        this.images = []
        for (var x of temp.data.response) {
          this.images.push(this.$root.cdnUrl + x)
        }
      }
    },
    async getCategories () {
      var temp = await this.axios.get(this.$root.apiUrl + 'categories')
      for (var x of temp.data.response) {
        this.categories.push(x)
      }
    },
    async clearImages () {
      this.images = []
    }
  },
  beforeMount: function () {
    this.getPhotos()
    this.getCategories()
  }
}
</script>

<style scoped>
#main_container {
    max-width: 1260px;
}
</style>
