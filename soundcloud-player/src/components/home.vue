<template lang="pug">
  #home
    h1.page-header.text-center.text-capitalize soundcloud player
    p.text-center.text-uppercase get any request: name, song, title
    
    // INPUT SECTION
    .row
      .col-md-8.col-md-offset-2
        form
          .form-group
            h3.text-center.text-capitalize track information
            input.form-control( type="text", placeholder="type here and click submit request" )
          .form-group.text-center
            button.btn.btn-primary.text-capitalize( type="button", @click="getTracks()" ) submit request
    
    // OUTPUT SECTION
    .row
      .col-md-8.col-md-offset-2
        ul.list-unstyled
          li
</template>

<script>
  import SC from 'soundcloud'

  SC.initialize({
    client_id: 'g79oUOmfBbcXJfZpFUVuqjR28Uu9O8TN'
    // redirect_uri: 'http://example.com/callback'
  })
  export default {
    name: 'home',
    data () {
      return {
        pageSize: 100
      }
    },
    methods: {
      getTracks () {
        SC.get('/tracks', {
          q: 'buskers',
          // license: 'cc-by-sa',
          limit: this.pageSize
        })
        .then(function (tracks) {
          console.log(tracks)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  /**/
</style>
