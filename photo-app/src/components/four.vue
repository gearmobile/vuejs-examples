<template lang="pug">
  v-container
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
        h3.title.mb-0
          | {{ subtitle }}
      v-flex( xs12 )
        v-text-field( name="greeting", label="Ваше поздравление", v-model="greeting", multi-line )

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'индивидуальное поздравление',
      subtitle: '(мы обязательно напишем его на сертификате)',
      greeting: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
