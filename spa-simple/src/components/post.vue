<template lang="pug">
  article.post( v-if="post" )
    h3.post-title {{ post.title }}
    img.post-image( :src="post.image", alt="post.title" )
    p.post-body {{ post.body }}
    router-link.post-link( tag="a", to="/blog" ) back to blog
</template>

<script>
  import posts from '../data/config.js'

  export default {
    name: 'post',
    firebase: {
      posts
    },
    data () {
      return {
        post: null
      }
    },
    created () {
      const id = this.$route.params.id
      this.post = this.posts[id]
    }
  }
</script>

<style scoped>
  /**/
</style>
