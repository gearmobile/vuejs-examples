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
              v-text-field( name="name", id="name", label="Name", required )

          // LOCATION FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="location", id="location", label="Location", required )

          // IMAGE FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="image", id="image", label="Image", required )

          // IMAGE PREVIEW
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              img( src="http://via.placeholder.com/800x400", alt="Image", style="width: 100%; height: auto" )

          // DESCRIPTION FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="description", id="description", label="Description", required, multi-line )

          // NAME FIELD
          v-layout( row )
            v-flex( xs12, sm6, offset-sm3 )
              v-text-field( name="name", id="name", label="Name", required )

</template>

<script>
  export default {
    //
  }
</script>

<style lang="stylus" scoped>
    //
</style>

