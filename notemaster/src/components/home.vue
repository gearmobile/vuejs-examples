<template lang="pug">
  #home
    h1.text-center NoteMaster

    // INPUT SECTION
    form
      .form-group
        label( for="title" ) Note Title
        input.form-control( type="text", id="title", v-model.trim="note.title" )
      .form-group
        label( for="text" ) Note Text
        textarea.form-control( id="text", rows="5", v-model.trim="note.body" )
      .form-group
        button.btn.btn-primary( type="button", @click="onSendData()" ) Submit

    // OUTPUT SECTION
    .well
      app-card( v-for="(note, index) in notes", :key="index", :note="note" )
</template>

<script>
  import Card from './card.vue'
  import eventBus from '../main.js'

  export default {
    name: 'home',
    data () {
      return {
        note: {
          title: null,
          body: null
        },
        notes: []
      }
    },
    methods: {
      onSendData () {
        this.notes.push({
          title: this.note.title,
          date: this.onDate(),
          body: this.note.body
        })
        this.clearForm(this.note)
      },
      onDate () {
        const date = new Date()
        return date.toLocaleString('en-US')
      },
      // HELPER FUNCTIONS
      onDelete (value) {
        this.notes.splice(this.notes.indexOf(value), 1)
      },
      clearForm (object) {
        for (let key in object) {
          object[key] = null
        }
      }
    },
    components: {
      appCard: Card
    },
    created () {
      eventBus.$on('onRemove', data => {
        this.onDelete(data)
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
