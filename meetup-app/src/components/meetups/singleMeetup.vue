<template lang="pug">
  
  v-container
    v-layout( row, wrap )
      v-flex( xs12 )
        v-card
          v-card-title( primary-title )
            h4
              | {{ meetup.title }}
          v-card-media( :src="meetup.path", height="400px" )
          v-card-text
            .info--text
              | {{ meetup.date | date }}
            article
              | {{ meetup.description }}
          v-card-actions
            v-spacer
            v-btn.primary
              | register

</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.getMeetupSelected(this.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

