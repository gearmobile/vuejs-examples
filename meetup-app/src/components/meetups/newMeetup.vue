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
          v-layout.mb-4( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-btn.primary( raised, @click="onPick()" )
                | upload image
              input( type="file", id="image", style="display: none", ref="inputImage", accept="image/*", @change="onUpload" )

          // IMAGE PREVIEW
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              img( :src="meetup.image", :alt="meetup.name", style="width: 100%; height: auto" )

          // DESCRIPTION FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="description", id="description", label="Description", v-model="meetup.description", required, multi-line )

          // DATE FIELD
          v-layout.mb-4( row )
            v-flex( xs12, sm6, offset-sm3, style="display: flex; justify-content: center" )
              v-date-picker( v-model="meetup.schedule.date" )
            
          // TIME FIELD
          v-layout.mb-4( row )
            v-flex( xs12, sm6, offset-sm3, style="display: flex; justify-content: center" )
              v-time-picker( v-model="meetup.schedule.time", format="24hr" )

          // SUBMIT FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3, style="display: flex; justify-content: center" )
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
          schedule: {
            date: null,
            time: null
          },
          date: new Date()
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
      onPick () {
        this.$refs.inputImage.click()
      },
      onUpload (event) {
        const files = event.target.files
        let fileName = files[0].filename
        if (fileName.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
      },
      onSend () {
        if (!this.show) {
          return
        }
        this.createMeetup(this.meetup)
        this.$router.push('/meetup')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

