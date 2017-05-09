<template lang="pug">
  #primo
</template>

<script>
  import axios from 'axios'
  const url = 'https://www.codecademy.com/'
  export default {
    name: 'primo',
    data () {
      return {
        response: ''
      }
    },
    methods: {
      getData () {
        axios.get(url)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
//
</style>
