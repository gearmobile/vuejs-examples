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

    // COMPUTED PROPERTY WITH GET/SET, ARRAY VALUE
    h2
      | computed property with get/set, array value (
      em setter never called
      | )
    form
      label
        input(type='checkbox', value='foo', v-model='vuexArr')
        | foo
      label
        input(type='checkbox', value='bar', v-model='vuexArr')
        | bar
      p value: {{ vuexArr }}



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
        boolGet: 'getBool',
        arrayGet: 'getArray'
      }),
      vuexBool: {
        get () { return this.boolGet },
        set (value) { this.boolSet(value) }
      },
      vuexArr: {
        get () { return this.arrayGet },
        set (value) { this.arraySet(value) }
      }
    },
    methods: {
      ...mapActions({
        boolSet: 'setBool',
        arraySet: 'setArray'
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
