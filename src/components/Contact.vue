<template>
    <v-container fluid id="main_container">
        <v-jumbotron color="grey lighten-2" height="200px">
            <v-container>
                <h3 class="display-3">Contact</h3>
                <span class="subheading">

                </span>
            </v-container>
        </v-jumbotron>
        <v-form v-model="valid" ref="contactForm">
            <v-container fluid px-0>
                <v-layout row wrap>
                    <v-flex xs12 sm6 pr-3>
                        <v-card  elevation-6>
                            <v-card-media src="/static/img/img2.jpg" height="430px">
                            </v-card-media>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                            label="Name"
                            v-model="name"
                            :rules="nameRules"
                            required
                        ></v-text-field>
                        <v-text-field
                        label="E-mail"
                        v-model="email"
                        :rules="emailRules"
                        required
                        ></v-text-field>
                        <v-layout row wrap>
                            <v-flex xs12 sm6 pr-2>
                                <v-text-field
                                label="Phone Number"
                                v-model="telephone"
                                :rules="telephoneRules"
                                mask="(##)####-####"
                                type="phone"
                                required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                label="Description"
                                v-model="description"
                                :rules="descriptionRules"
                                multi-line
                                :counter="255"
                                required
                                ></v-text-field>
                            </v-flex>
                            <v-btn
                                block
                                @click="submit"
                                :disabled="!valid"
                                color="success"
                                elevation-6
                            >
                                Submit
                                <v-icon right>email</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Enter your Name'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Enter your E-mail',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail invalid'
    ],
    telephone: '',
    telephoneRules: [
      v => !!v || 'Enter your Phone Number',
      v => v.length === 10 || 'Phone Number invalid'
    ],
    description: '',
    descriptionRules: [
      v => !!v || 'Enter a Description of the type of service you are looking for.',
      v => v.length <= 1001 || 'The description should be no more than 1000 characters.'
    ]
  }),
  methods: {
    submit () {
      //send email out to me from SES
      return true
    }
  }
}
</script>

<style scoped>
#main_container {
  max-width: 1260px;
}
.img {
    border-radius: 8px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
</style>
