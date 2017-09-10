<template lang="pug">
  
  v-container
    v-layout( row, wrap )
      v-flex( xs12 )
        v-card
          v-card-title( primary-title )
            h4
              | {{ meetup.title }}
            v-spacer
            template( v-if="showEdit" )
              app-edit( :meetup="meetup" )
          v-card-media( :src="meetup.path", height="400px" )
          v-card-text
            .info--text
              | {{ meetup.date | date }} - {{ meetup.location }}
            article
              | {{ meetup.description }}
          v-card-actions
            v-spacer
            v-btn.primary
              | register

</template>

<script>
  import filterDate from '../../filters/date.js'
  import editMeetup from '../meetups/editMeetup.vue'
  import editDate from '../meetups/editMeetupDate.vue'

  export default {
    props: ['id'],
    filters: {
      date: filterDate
    },
    computed: {
      meetup () {
        return this.$store.getters.getMeetupSelected(this.id)
      },
      userAuthTrue () {
        return this.$store.getters.getUsers !== null && this.$store.getters.getUsers !== undefined
      },
      showEdit () {
        if (!this.userAuthTrue) {
          return false
        } else {
          return this.$store.getters.getUsers.id === this.meetup.creatorID
        }
      }
    },
    components: {
      appEdit: editMeetup,
      appDate: editDate
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

