<template lang="pug">
  #primo
    .columns
      .column
        a.button.is-primary( @click="onGet" ) get tweets
</template>

<script>
  import axios from 'axios'
  const url = ''
  export default {
    name: 'primo',
    data () {
      return {
        datas: ''
      }
    },
    methods: {
      onGet () {
        axios.get(url)
          .then(response => {
            this.datas = response.data
            console.log(this.datas)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
