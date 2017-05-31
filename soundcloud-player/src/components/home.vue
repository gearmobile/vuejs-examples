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
    .row( v-if="tracks" )
      .col-md-8.col-md-offset-2
        app-playlist( v-for="(track, index) in tracks", :key="index", :track="track" )

    // CONTROLS
    .row
      .col-md-6.col-md-offset-3
        h3.text-center.text-capitalize player volume
        .form-group
          input( type="range", min="0", max="100", step="2", v-model="volume", @input="changeVolume()" )
    .row
      .col-md-8.col-md-offset-2
        h3.text-center.text-capitalize player controls
        .button-group.text-center.player__control
          button.btn.btn-primary.text-uppercase( type="button" ) previous
          button.btn.btn-primary.text-uppercase( type="button", @click="onPause()" ) pause
          button.btn.btn-primary.text-uppercase( type="button", @click="onPlay()" ) play
          button.btn.btn-primary.text-uppercase( type="button", @click="onStop()" ) stop
          button.btn.btn-primary.text-uppercase( type="button" ) next
</template>

<script>
  import SC from 'soundcloud'
  import Playlist from '../components/playlist.vue'
  import eventBus from '../main.js'

  SC.initialize({
    client_id: 'g79oUOmfBbcXJfZpFUVuqjR28Uu9O8TN'
  })

  export default {
    name: 'home',
    data () {
      return {
        pageSize: 10,
        tracks: [],
        search: '',
        currTrack: null,
        volume: 50
      }
    },
    components: {
      appPlaylist: Playlist
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
      },
      onInit (value) {
        SC.stream('/tracks/' + value)
          .then(response => {
            this.currTrack = response
          })
      },
      onPlay () {
        this.currTrack.play()
      },
      onPause () {
        this.currTrack.pause()
      },
      onStop () {
        this.currTrack.pause()
        this.currTrack.seek(0)
      },
      changeVolume () {
        this.currTrack.setVolume(this.volume / 100)
      }
    },
    created () {
      eventBus.$on('selectItem', data => {
        this.onInit(data)
      })
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
