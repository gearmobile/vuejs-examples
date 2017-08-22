<template lang="pug">
  
  v-container
    v-layout( row, wrap )
      v-flex( xs12 )
        v-card
          v-card-title( primary-title )
            h4
              | title
          v-card-media( src="http://via.placeholder.com/800x400", height="400px" )
          v-card-text
            date.info--text
              | 17-March-2017
            article
              | lorem20
          v-card-actions
            v-spacer
            v-btn.primary
              | register

</template>

<script>
  export default {
    //
  }
</script>

<style lang="stylus" scoped>
    //
</style>

