<template lang="pug">
  #app.translator
    .container.translator__container
      .row.translator__row
        .col-md-8.col-md-offset-2.translator__column
          h1.page-header.text-center.translator__title {{ title }}
          h4.page-header.text-center.translator__subtitle {{ subtitle }}
</template>

<script>
  import inputTranslate from './components/inputTranslate.vue'
  import outputTranslate from './components/outputTranslate.vue'

  export default {
    name: 'app',
    data () {
      return {
        title: 'yandex word translator',
        subtitle: 'Powered vy Vue.js and Booswatch'
      }
    },
    components: {
      appInputTranslate: inputTranslate,
      appOutputTranslate: outputTranslate
    }
  }
</script>

<style lang="scss">
  .translator {

    &__title {
      text-transform: capitalize;
      font-weight: 700;
      font-size: 30px;
      color: forestgreen;
      margin-bottom: 0;
    }

    &__subtitle {
      margin-top: 0;
      font-size: 15px;
      color: rgba( 0,0,0, .6 )
    }
  }
</style>
