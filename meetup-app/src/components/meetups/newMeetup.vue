<template lang="pug">
  
  v-container
    v-layout( row )
      v-flex( xs12, sm6, offset-sm3, style="text-transform: capitalize" )
        h4
          | create a new meetup

    v-layout( row )
      v-flex( xs12 )
        form( @submit.prevent="onSend" )

          // NAME FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="name", id="name", label="Name", v-model="meetup.name", required )

          // LOCATION FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="location", id="location", label="Location", v-model="meetup.location", required )

          // IMAGE FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="image", id="image", label="Image", v-model="meetup.image", required )

          // IMAGE PREVIEW
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              img( :src="meetup.image", :alt="meetup.name", style="width: 100%; height: auto" )

          // DESCRIPTION FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="description", id="description", label="Description", v-model="meetup.description", required, multi-line )

          //- // DATE FIELD
          //- v-layout( row )
          //-   v-flex( xs12, sm6, offset-sm3 )
          //-     //

          // DATE FIELD
          v-layout.mb-2( row )
            v-flex( xs12, sm6, offset-sm2 )
              v-date-picker( v-model="meetup.date" )
            
          // TIME FIELD
          v-layout.mb-2( row )
            v-flex( xs12, sm6, offset-sm2 )
              v-time-picker( v-model="meetup.time", format="24hr" )

          // SUBMIT FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-btn.primary( :disabled="!show", type="submit" )
                | create meetup

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        meetup: {
          name: null,
          location: null,
          image: 'http://via.placeholder.com/800x400',
          description: null,
          date: null,
          time: null
        }
      }
    },
    computed: {
      show () {
        return this.meetup.name !== null && this.meetup.location !== null && this.meetup.image !== null && this.meetup.description !== null && this.meetup.date !== null && this.meetup.time !== null
      }
    },
    methods: {
      ...mapActions({
        createMeetup: 'newMeetup'
      }),
      onSend () {
        this.createMeetup(this.meetup)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

