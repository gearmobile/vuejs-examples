<template lang="pug">
  
  v-container.meetup
    v-layout.mb-2( v-for="meetup in meetups", :key="meetup.id" )
      v-flex( xs12, sm10, md8, offset-sm1, offset-md2 )
        v-card.info
          v-container( fluid )
            v-layout( row )
              v-flex( xs5, sm4, md3 )
                v-card-media( :src="meetup.path", height="125px" )
              v-flex( xs7, sm8, md9 )
                v-card-title( primary-title )
                  section
                    h5.white--text.mb-0.meetup__title
                      | {{ meetup.title }}
                    p.white--text.mb-0
                      | {{ meetup.date }}
                v-card-actions( style="justify-content: flex-end" )
                  v-btn( flat, dark, :to="'/meetup/' + meetup.id" )
                    v-icon( dark, left )
                      | arrow_forward
                    | meetup details

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'meetup',
    computed: {
      ...mapGetters({
        meetups: 'getMeetups'
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .meetup

    &__title
      text-transform capitalize

</style>

