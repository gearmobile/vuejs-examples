<template lang="pug">
  #blog
    article( v-for="(post, index) in posts", :key="index" )
      h4.article-title {{ post.title }}
      img.article-image( :src="post.image", alt="post.title" )
      p.article-body {{ post.body }}
      router-link.article-link( tag="a", :to="{ name: 'Post', params: { id: index } }" ) read more
</template>

<script>
  import posts from '../data/config.js'

  export default {
    name: 'blog',
    firebase: {
      posts
    }
  }
</script>

<style scoped>
  /**/
</style>
