<template lang="pug">
  #home
    h1.display-4.text-capitalize generate your team
    button.btn.btn-primary( type="button", @click="fetchPersons(3)" ) fetch data
    .row
      .col-sm-6
        .card-group
          app-card( v-for="(person, index) in persons", :key="index", :character="person" )
</template>

<script>
  import Card from '../components/card.vue'
  import axios from 'axios'
  const baseURL = 'http://swapi.co/api/people/'

  export default {
    name: 'home',
    data () {
      return {
        quantity: 6,
        count: null,
        ids: [],
        persons: []
      }
    },
    methods: {
      counter () {
        axios.get(baseURL)
          .then(response => {
            this.count = parseInt(response.data.count)
          })
          .catch(error => {
            console.log(error)
          })
      },
      randomID () {
        return Math.floor(Math.random() * this.count) + 1
      },
      fetchPersons (quantity) {
        for (let i = 0; i < quantity; i += 1) {
          axios.get(baseURL + this.randomID())
            .then(response => {
              this.persons.push(response.data)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },
    created () {
      this.counter()
    },
    components: {
      appCard: Card
    }
  }
</script>

<style scoped>
  button {
    cursor: pointer;
  }
</style>
