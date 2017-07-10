<template lang="pug">
  v-container( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
      v-flex( v-for="cert in certs", :key="cert", xs6 )
        v-card.py-4
          v-card-text.text-xs-center
            div.headline
              | {{ cert.title }}
</template>

<script>
export default {
  name: 'three',
  data () {
    return {
      title: 'формат сертификата',
      certs: [
        {
          name: 'cert1',
          title: 'желтый кролик',
          price: 1000
        },
        {
          name: 'cert2',
          title: 'классика в рамочке',
          price: 1200
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
