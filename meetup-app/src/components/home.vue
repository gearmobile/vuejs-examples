<template lang="pug">
  v-container

    // BUTTONS GROUP
    v-layout.mb-2( row, wrap )
      v-flex.text-xs-center.text-sm-right( xs12, sm6 )
        v-btn.info( large, to="/meetup" )
          | explore meetups
      v-flex.text-xs-center.text-sm-left( xs12, sm6 )
        v-btn.info( large, to="/meetup/new" )
          | organize meetup

    // CAROUSEL
    v-layout.mb-4( row )
      v-flex( xs12 )
        v-carousel
          v-carousel-item.carousel-item( v-for="meetup in meetups", :key="meetup.id", :src="meetup.path", @click="onShow(meetup.id)" )
            .carousel-title
              | {{ meetup.title }}

    // TEXT
    v-layout( row )
      v-flex.text-xs-center( xs12 )
        p.title.mb-0
          | Join our Meetup Vue.js + Vuetify.js
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        meetups: [
          { id: 1, path: 'http://cdni.condenast.co.uk/1920x1280/a_c/Charles-Bridge-and-the-Vltava-River-Prague-Czech-Republic-conde-nast-traveller-26oct16-rex.jpg', title: 'Meetup in Prague' },
          { id: 2, path: 'https://valholl-prd.s3.amazonaws.com/images/warsaw_sumar2017_facebook.width-1200.png', title: 'Meetup in Warsaw' },
          { id: 3, path: 'https://a1.odistatic.net/images/landingpages/vacation/1920x800/budapest_1920x800.jpg', title: 'Meetup in Budapest' }
        ]
      }
    },
    methods: {
      onShow (value) {
        this.$router.push('/meetup/' + value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
  .carousel-title
    background-color rgba( 0,0,0, .5 )
    padding 1rem 2rem
    color white
    font-size 2rem
    border-radius .4rem
    position absolute
    top 2rem
    left 2rem

  .carousel-item
    cursor pointer

</style>
