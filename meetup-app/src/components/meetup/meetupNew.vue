<template lang="pug">
  v-container
    
    v-layout( row )
      v-flex( xs12, sm6, offset-sm3 )
        h4
          | create new meetup

    v-layout( row )
      v-flex( xs12 )
        form( @submit.prevent="onSend()" )

          // TITLE
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="title", label="Title", v-model="meetup.title", required )
          
          // LOCATION
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="location", label="Location", v-model="meetup.location", required )

          // UPLOAD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="upload", label="Upload Image", v-model="meetup.upload", required )

          // DESCRIPTION
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="description", label="Description", v-model="meetup.description", multi-line, required )

          // PREVIEW
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              img.image( :src="meetup.upload", :alt="meetup.title" )

          // BUTTON
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-btn.primary( type="submit", :disabled="isBlocked" )
                | create meetup

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'meetupNew',
    data () {
      return {
        meetup: {
          title: '',
          location: '',
          upload: '',
          description: ''
        }
      }
    },
    computed: {
      isBlocked () {
        return !this.meetup.title || !this.meetup.location || !this.meetup.upload || !this.meetup.description
      }
    },
    methods: {
      ...mapActions({
        meetupCreate: 'newMeetup'
      }),
      onSend () {
        const meetup = {
          title: this.meetup.title,
          location: this.meetup.location,
          upload: this.meetup.upload,
          description: this.meetup.description,
          date: new Date()
        }
        this.meetupCreate(meetup)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .image
    height 300px
</style>

