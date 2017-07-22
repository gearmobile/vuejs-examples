<template lang="pug">
  
  v-flex( xs12 )
    app-stepper( v-for="(point, index) in points", :key="index", :point="point" )

</template>

<script>
  import axios from 'axios'
  import stepper from './stepper.vue'

  const root = 'http://localhost:3000'

  export default {
    name: 'stepper-list',
    data () {
      return {
        points: []
      }
    },
    components: {
      appStepper: stepper
    },
    methods: {
      fetchData () {
        axios.get(root + '/electric')
          .then(response => {
            this.points = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.fetchData()
    }
  }

</script>

<style lang="stylus" scoped>
  //
</style>

