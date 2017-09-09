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
                | Edit Meetup
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
                v-btn.accent--text( flat, @click="closeDialod()" )
                  | cancel
                v-btn.accent--text( flat, @click="saveDialod()" )
                  | save
</template>

<script>
  export default {
    name: 'editMeetup',
    props: ['meetup'],
    data () {
      return {
        dialog: false,
        edit: {
          name: this.meetup.title,
          description: this.meetup.description
        }
      }
    },
    methods: {
      closeDialod () {
        this.dialog = false
      },
      saveDialod () {
        if (this.edit.name === '' || this.edit.description) {
          return false
        } else {
          //
        }
        this.closeDialod()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

