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
                  h4.white--text.mb-0( style="text-transform: capitalize" )
                    | {{ meetup.title }}
                  div
                    | {{ meetup.date }}
              v-card-actions( style="position: absolute; right: 0; bottom: 0" )
                v-btn( flat, :to="'meetup/' + meetup.id" )
                  v-icon( left, light )
                    | arrow_forward
                  | view details
              
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { id: '1', path: 'http://via.placeholder.com/800x400', title: 'title one', date: '17-March-2017' },
        { id: '2', path: 'http://via.placeholder.com/800x400', title: 'title two', date: '17-March-2017' },
        { id: '3', path: 'http://via.placeholder.com/800x400', title: 'title three', date: '17-March-2017' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    //
</style>

