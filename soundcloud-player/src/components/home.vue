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
            input.form-control( type="text", v-model="search", placeholder="type here and click submit request" )
          .form-group.text-center
            button.btn.btn-primary.text-capitalize( type="button", @click="getTracks()" ) submit request
    
    // OUTPUT SECTION
    .row
      .col-md-8.col-md-offset-2
        ul.list-group.list-group-flush( v-for="(track, index) in tracks", :key="index" )
          li.list-group-item #[strong Track Title:] {{ track.title }}
          li.list-group-item #[strong Genre:] {{ track.genre }}
          li.list-group-item #[strong Release Year:] {{ track.release_year }}
</template>

<script>
  import SC from 'soundcloud'

  SC.initialize({
    client_id: 'g79oUOmfBbcXJfZpFUVuqjR28Uu9O8TN'
  })
  export default {
    name: 'home',
    data () {
      return {
        pageSize: 10,
        tracks: [],
        search: ''
      }
    },
    methods: {
      getTracks () {
        const searchConfig = {
          q: this.search,
          limit: this.pageSize
        }
        SC.get('/tracks', searchConfig)
        .then(response => {
          this.tracks = response
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  /**/
</style>
