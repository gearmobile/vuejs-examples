<template lang="pug">
  
  q-layout
    
    .layout-view
      .layout-padding
        q-card
          q-card-title
            | {{ coin.name }}
          q-card-main
            q-list
              q-item
                q-item-main
                  q-item-tile( label )
                    | Symbol
                  q-item-tile( sublabel )
                    | {{ coin.symbol }}
              q-item-separator
              q-item
                q-item-main
                  q-item-tile( label )
                    | Price (USD)
                  q-item-tile( sublabel )
                    | {{ coin.price_usd }}
              //- q-item-separator
              //- q-item
              //-   q-item-main
              //-     q-item-tile( label )
              //-       | Rank
              //-     q-item-tile( sublabel )
              //-       | {{ icon.rank }}

</template>

<script>
  import axios from 'axios'
  import { QLayout, QCard, QCardTitle, QCardMain, QList, QItem, QItemMain, QItemTile, QItemSeparator } from 'quasar'

  const root = 'https://api.coinmarketcap.com/v1/ticker/'

  export default {
    name: 'coins',
    data () {
      return {
        coin: null
      }
    },
    components: {
      QLayout,
      QCard,
      QCardTitle,
      QCardMain,
      QList,
      QItem,
      QItemMain,
      QItemTile,
      QItemSeparator
    },
    methods: {
      getData () {
        axios.get(root + this.$route.params.id + '/')
          .then(data => {
            this.coin = data.data[0]
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
