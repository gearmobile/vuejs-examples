<template lang="pug">
  v-layout( row, justify-center )
    // DIALOG
    v-dialog( persistent, v-model="dialog" )
      v-btn.accent( slot="activator", fab, dark )
        v-icon( dark )
          | edit
      v-card
        v-container
          // MODAL TITLE
          v-layout( row, wrap )
            v-flex( xs12 )
              v-card-title
                | Edit Meetup Date 
          v-divider
          // MODAL CONTENT
          v-layout( row, wrap )
            v-flex( xs12 )
              v-card-text
                v-text-field( name="name", id="name", label="Name", v-model.trim="edit.name", required )
                v-text-field( name="description", id="description", label="Description", v-model.trim="edit.description", required, multi-line )
          // modal actions
          v-layout( row, wrap )
            v-flex( xs12 )
              v-card-actions
                v-spacer 
                v-btn.accent--text( flat, @click="close()" )
                  | cancel
                v-btn.accent--text( flat, @click="save()" )
                  | save
</template>

<script>
  export default {
    name: 'editDate',
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

