<template lang="pug">
  #single
    h2.page-header Одинарное окно
    section.well
      h3.page-header Размеры окна:
      .form-group
        label
          | Window Height: 
          span {{ heightWindow }}мм
          input(:min='minH', :max='maxH', :step='stepH', type='range', v-model='height')
      .form-group
        label
          | Window Width: 
          span {{ widthWindow }}мм
          input(:min='minW', :max='maxW', :step='stepW', type='range', v-model='width')


</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'singleWindow',
    data () {
      return {
        // msg: 'single window'
      }
    },
    computed: {
      ...mapGetters({
        heightWindow: 'windowHeight',
        widthWindow: 'windowWidth',
        minH: 'minHeight',
        maxH: 'maxHeight',
        stepH: 'stepHeight',
        minW: 'minWidth',
        maxW: 'maxWidth',
        stepW: 'stepWidth'
      }),
      height: {
        get () {
          return this.$store.state.singleWindow.sizes.height
        },
        set (value) {
          this.$store.dispatch('updateHeight', value)
        }
      },
      width: {
        get () {
          return this.$store.state.singleWindow.sizes.width
        },
        set (value) {
          this.$store.dispatch('updateWidth', value)
        }
      }
    },
    methods: {
      ...mapActions({
        // onUp: 'increase',
        // onDown: 'decrease'
      })
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
