<template lang="pug">

  v-container
    v-layout( row, wrap )
      
      v-flex.mb-2( xs12, sm10, offset-sm1, md8, offset-md2, v-for="meetup in meetups", :key="meetup.id" )
        v-card.info( fluid, grid-list-lg )
          v-layout.pa-2( row )
            v-flex( xs5, sm4, md3 )
              v-card-media( height="130px", :src="meetup.path" )
            v-flex( xs7, sm8, md9, style="position: relative" )
              v-card-title( primary-title )
                article
                  h5.white--text.mb-0( style="text-transform: capitalize" )
                    | {{ meetup.title }}
                  div
                    | {{ meetup.date | date }}
              v-card-actions( style="position: absolute; right: 0; bottom: 0" )
                v-btn( flat, :to="'meetup/' + meetup.id" )
                  v-icon( left, light )
                    | arrow_forward
                  | view details
              
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        meetups: 'getMeetupsSorted'
      })
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

