<template lang="pug">

  #hello

    // DATA PROPERTY
    h2 data property, array value (works)
    form
      label
        input(type='checkbox', value='foo', v-model='localArr')
        | foo
      label
        input(type='checkbox', value='bar', v-model='localArr')
        | bar
      p value: {{ localArr }}

    // COMPUTED PROPERTY
    h2 computed property with get/set, bool value (works)
    form
      label
        input(type='checkbox', value='true', v-model='vuexBool')
        | true
      p value: {{ vuexBool }}


</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'hello',
    data () {
      return {
        localArr: []
      }
    },
    computed: {
      ...mapGetters({
        boolGet: 'getBool'
      }),
      vuexBool: {
        get () { return this.boolGet },
        set (value) { this.boolSet(value) }
      }
    },
    methods: {
      ...mapActions({
        boolSet: 'setBool'
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
