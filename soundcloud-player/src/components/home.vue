<template lang="pug">
  .player
    h1.page-header.text-center.text-capitalize soundcloud player
    h4.text-center.text-uppercase get any request: name, song, title
    
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

    // CONTROLS
    .row
      .col-md-6.col-md-offset-3
        h3.text-center.text-capitalize player volume
        .form-group
          input( type="range", min="0", max="100", step="2", value="80" )
    .row
      .col-md-8.col-md-offset-2
        h3.text-center.text-capitalize player controls
        .button-group.text-center.player__control
          button.btn.btn-primary.text-uppercase( type="button" ) previous
          button.btn.btn-primary.text-uppercase( type="button" ) pause
          button.btn.btn-primary.text-uppercase( type="button" ) play
          button.btn.btn-primary.text-uppercase( type="button" ) stop
          button.btn.btn-primary.text-uppercase( type="button" ) next
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
          this.search = ''
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .player {

    &__control {
      padding: .8rem 0;

      & button {
        margin-right: .2rem;
        margin-left: .2rem;
      }
    }
  }
</style>
