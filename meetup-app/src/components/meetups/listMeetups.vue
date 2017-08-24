<template lang="pug">

  v-container
    v-layout( row, wrap )
      // HORIZONTAL CARD
      v-flex.mb-2( xs12, sm10, offset-sm1, md8, offset-md2, v-for="meetup in meetups", :key="meetup.id" )
        v-card.info.card( fluid, grid-list-lg )
          v-layout.pa-2( row )
            // CARD MEDIA
            v-flex.card__thumb( xs5, sm4, md3 )
              v-card-media( height="130px", :src="meetup.path" )
            // CARD CONTENT
            v-flex.card__content( xs7, sm8, md9 )
              v-card-title( primary-title )
                article
                  h5.white--text.mb-0.card__caption
                    | {{ meetup.title }}
                  div
                    | {{ meetup.date | date }}
              v-card-actions.card__control
                v-btn.white--text( flat, :to="'meetup/' + meetup.id" )
                  v-icon.white--text( left, light )
                    | arrow_forward
                  | view details
              
</template>

<script>
  import { mapGetters } from 'vuex'
  import filterDate from '../../filters/date.js'

  export default {
    filters: {
      date: filterDate
    },
    computed: {
      ...mapGetters({
        meetups: 'getMeetupsSorted'
      })
    }
  }
</script>

<style lang="stylus" scoped>

    .card

      &__content
        position relative

      &__caption
        text-transform capitalize

      &__control
        position absolute
        right 0
        bottom 0

</style>

