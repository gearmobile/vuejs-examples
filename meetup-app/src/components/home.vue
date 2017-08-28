<template lang="pug">
  v-container
    
    v-layout.mb-3( row, wrap )
      v-flex.text-xs-center.text-sm-right( xs12, sm6 )
        v-btn.primary( large, to='/meetup' )
          | list of meetups
      v-flex.text-xs-center.text-sm-left( xs12, sm6 )
        v-btn.primary( large, to='/meetup/new' )
          | new meetup
    
    v-layout( row, v-if="loading" )
      v-flex( xs12 )
        v-progress-circular.primary--text( indeterminate, :width="7", :size="70" )
    
    v-layout.mb-4( v-else )
      v-flex( xs12 )
        v-carousel
          v-carousel-item( v-for="meetup in meetups", :key="meetup.id", :src="meetup.path", @click="onClick(meetup.id)", style="cursor: pointer" )
            section.carousel-item__title
              | {{ meetup.title }}

    v-layout
      v-flex( xs12 )
        p
          | Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.
        p
          | Vim probo sapientem et, unum libris no nam, ne sed nostrum elaboraret. Prompta appellantur duo eu, ei usu reque sadipscing. Eum eu mutat ornatus, ad vix labore voluptua ponderum. At per dolor suavitate inciderint. Deserunt recteque an usu.
        p
          | Ad sit erat latine. Virtute nominavi antiopam sit et, ei porro placerat nec. Nam ut augue nihil vocibus, et sed discere nonumes accusata. Nam quaeque feugiat ut. Cu sea clita pertinax expetenda, ei sumo iusto omittantur eam.

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        meetupsPart: 'getMeetupsPart',
        loading: 'getLoadingState'
      }),
      meetups () {
        return this.meetupsPart
      }
    },
    methods: {
      onClick (id) {
        this.$router.push('meetup/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
  .carousel-item__title
    position absolute
    bottom 60px
    background-color rgba( 0,0,0, .5 )
    color white
    font-size 2rem
    padding 0 30px
    text-transform capitalize

</style>
