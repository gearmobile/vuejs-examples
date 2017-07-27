<template lang="pug">
  
  v-container.meetup
    v-layout.mb-2( v-for="meetup in meetups", :key="meetup.id" )
      v-flex( xs12, sm10, md8, offset-sm1, offset-md2 )
        v-card.info
          v-container( fluid )
            v-layout( row )
              v-flex( xs5, sm4, md3 )
                v-card-media( :src="meetup.thumb", height="125px" )
              v-flex( xs7, sm8, md9 )
                v-card-title( primary-title )
                  section
                    h5.white--text.mb-0.meetup__title
                      | {{ meetup.title }}
                    p.mb-0
                      | {{ meetup.date }}
                v-card-actions
                  v-btn( flat, dark, :to="'/meetup/' + meetup.id" )
                    v-icon( dark, left )
                      | arrow_forward
                    | meetup details

</template>

<script>
  export default {
    name: 'meetup',
    data () {
      return {
        meetups: [
          { id: 1, date: '21 July 2017', title: 'meetup in prague', thumb: 'http://cdni.condenast.co.uk/1920x1280/a_c/Charles-Bridge-and-the-Vltava-River-Prague-Czech-Republic-conde-nast-traveller-26oct16-rex.jpg' },
          { id: 2, date: '21 August 2017', title: 'meetup in warsaw', thumb: 'https://valholl-prd.s3.amazonaws.com/images/warsaw_sumar2017_facebook.width-1200.png' },
          { id: 3, date: '21 September 2017', title: 'meetup in budapest', thumb: 'https://a1.odistatic.net/images/landingpages/vacation/1920x800/budapest_1920x800.jpg' }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .meetup

    &__title
      text-transform capitalize

</style>

