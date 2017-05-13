<template lang="pug">
  q-layout
    
    // HEADER
    .toolbar( slot="header" )
      q-toolbar-title( :padding="0" ) VK API
    
    // CONTENT
    .layout-view
      .layout-padding
        .row

</template>

<script>
  import axios from 'axios'

  // const token = '095b52caf14f7fa6919adc0dafb146b29a204c73952551da0a9d40ed0e3f72b4e6b735fcf57b08476b5f7'
  // const url = 'https://api.vk.com/method/friends.search?count=60&access_token=' + token + '&v=5.52'
  const url = 'https://api.vk.com/method/friends.search?count=60&fields=photo_100&access_token=095b52caf14f7fa6919adc0dafb146b29a204c73952551da0a9d40ed0e3f72b4e6b735fcf57b08476b5f7&v=5.52'

  export default {
    methods: {
      getFriends () {
        axios.get(url)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.getFriends()
    }
  }

</script>

<style lang="css">
  /**/
</style>
