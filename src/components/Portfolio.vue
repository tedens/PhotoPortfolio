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
                            <v-select label="Categories" my-0 py-0
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
                            :src="image.src"
                            height="200px"
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
  data: () => ({
    images: [
    ],
    categories: [
      'Events', 'Nature', 'Portraits', 'Animals'
    ]
  }),
  methods:
    getPhotos(){
      //open serverless rds to get list of photos (last 50 and lazy load them in)
    },
    getSpecificPhotos(event){
      //open serverless rds and get all images that match the event type
    }
}
</script>

<style scoped>
#main_container {
    max-width: 1260px;
}
</style>
