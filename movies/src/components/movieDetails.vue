<template lang="pug">
  .details
    .columns
      .column.is-4
        figure.image
          img( :src="details.Poster", alt="details.Title" )
      .column.is-8
        h2.title.is-2 {{ details.Title }}
        ul
          li #[strong Genre]: {{ details.Genre }}
          li #[strong Released]: {{ details.Released }}
          li #[strong Actors]: {{ details.Actors }}
          li #[strong Director]: {{ details.Director }}
          li #[strong Writer]: {{ details.Writer }}
          li #[strong imdbRating]: {{ details.imdbRating }}
    .columns
      .column.auto
        h3.title.is-3 Plot
        p {{ details.Plot }}
        a.button.is-primary( :href="'http://imdb.com/title/' + details.imdbID", target="_blank" ) view imdb
        router-link.button.is-primary( tag="a", :to="{ path: '/' }" ) go back to search
</template>

<script>
  import axios from 'axios'
  const url = 'http://www.omdbapi.com'

  export default {
    name: 'details',
    data () {
      return {
        details: null,
        id: this.$route.params.id
      }
    },
    methods: {
      getDetails () {
        axios.get(url + '?i=' + this.id)
          .then(response => {
            this.details = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.getDetails()
    }
  }
</script>

<style lang="scss" scoped>
  .details {
    padding-right: 2rem;
    padding-left: 2rem;
  }
</style>
