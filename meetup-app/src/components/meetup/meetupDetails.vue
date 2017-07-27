<template lang="pug">
  
  v-container
    v-layout
      v-flex( xs12 )
        v-card
          v-card-title
            h6.primary--text
              | meetup title
          v-card-media( src="http://cdni.condenast.co.uk/1920x1280/a_c/Charles-Bridge-and-the-Vltava-River-Prague-Czech-Republic-conde-nast-traveller-26oct16-rex.jpg", height="600px" )
          v-card-text
            p.info--text.text-sm-right
              | 17 July 2017 - where it takes place
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga perferendis porro quia, natus alias vel? Tempora maxime fuga perferendis modi architecto adipisci, porro alias delectus. Laboriosam suscipit accusantium quibusdam odit, error, voluptatem ducimus earum dolor nesciunt alias atque, officia voluptate.
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem architecto atque nemo quia ut, excepturi aspernatur quaerat adipisci deleniti maxime fuga nisi omnis deserunt temporibus laudantium sed iusto nesciunt quae aliquid suscipit dicta voluptatem natus fugiat debitis ad! Minus modi voluptatem porro laborum fuga quasi facere maiores tenetur atque dicta aliquid debitis voluptas autem quos, exercitationem ipsum consectetur ullam. Explicabo!
            p
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugit, alias dicta explicabo a, id fugiat similique recusandae, ab et suscipit ut error laudantium dolores. Impedit maxime quis nobis nam!
          v-card-actions
            v-spacer
            v-btn.primary
              | register
</template>

<script>
  export default {
    name: 'meetupDetails'
  }
</script>

<style lang="stylus" scoped>
  //
</style>

