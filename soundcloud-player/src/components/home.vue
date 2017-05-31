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
            input.form-control( type="text", v-model="search", placeholder="type here and click submit request", required )
          .form-group.text-center.player__control
            button.btn.btn-primary.text-capitalize( type="button", @click="getTracks()" ) submit request
            button.btn.btn-primary.text-capitalize( type="button", @click="clearTracks()" ) reset request
    
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
          button.btn.btn-primary.text-uppercase( type="button", @click="onPrevious()" ) previous
          button.btn.btn-primary.text-uppercase( type="button", @click="onPause()" ) pause
          button.btn.btn-primary.text-uppercase( type="button", @click="onPlay()" ) play
          button.btn.btn-primary.text-uppercase( type="button", @click="onStop()" ) stop
          button.btn.btn-primary.text-uppercase( type="button", @click="onNext()" ) next
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
        pageSize: 5,
        tracks: [],
        search: null,
        currTrack: null,
        currID: null,
        volume: 50
      }
    },
    components: {
      appPlaylist: Playlist
    },
    methods: {
      clearTracks () {
        this.tracks = []
        this.search = null
      },
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
      getTrack (value) {
        SC.stream('/tracks/' + value)
          .then(response => {
            this.currTrack = response
          })
      },
      getIndex (arr, obj) {
        this.currID = arr.indexOf(obj)
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
      onNext () {
        let nextTrack = this.currID += 1
        if (nextTrack >= this.tracks.length) {
          nextTrack = 0
        }
        this.getTrack(this.tracks[nextTrack].id)
      },
      onPrevious () {
        let prevTrack = this.currID -= 1
        if (prevTrack < 0) {
          prevTrack = this.tracks.length - 1
        }
        this.getTrack(this.tracks[prevTrack].id)
      },
      changeVolume () {
        if (!this.currTrack) {
          return
        }
        this.currTrack.setVolume(this.volume / 100)
      }
    },
    created () {
      eventBus.$on('selectItem', data => {
        this.getTrack(data.id)
        this.getIndex(this.tracks, data)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles/range.css';

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
