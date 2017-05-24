<template lang="pug">
  #home
    h1.display-4.text-capitalize generate your team
    button.btn.btn-primary( type="button", @click="onFetchData('people')" ) fetch data
    .row
      .col-sm-6
        .card-group
          app-card( v-for="(card, index) in cards", :key="index", :character="card" )
</template>

<script>
  import Card from '../components/card.vue'
  import axios from 'axios'
  const baseURL = 'http://swapi.co/api/'

  export default {
    name: 'home',
    data () {
      return {
        cards: []
      }
    },
    methods: {
      onFetchData (value) {
        axios.get(baseURL + value + '/')
          .then(response => {
            console.log(response.data)
            this.cards = response.data.results
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    components: {
      appCard: Card
    }
  }
</script>

<style scoped>
  /**/
</style>
