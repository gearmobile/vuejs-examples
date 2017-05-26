<template lang="pug">
  #blog
    article( v-for="(post, index) in posts", :key="index" )
      h4.article-title {{ post.title }}
      img.article-image( :src="post.image", alt="post.title" )
      p.article-body {{ post.body }}
</template>

<script>
  import posts from '../data/config.js'

  export default {
    name: 'blog',
    firebase: {
      posts
    },
    data () {
      return {
        msg: 'blog'
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
