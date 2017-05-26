<template lang="pug">
  section.section.blog
    article.blog__post( v-for="(post, index) in posts", :key="index" )
      img.blog__image( :src="post.image", alt="post.title" )
      h3.blog__title {{ post.title }}
      router-link.blog__link( tag="a", :to="{ name: 'Post', params: { id: index } }" ) read more
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

<style lang="scss" scoped>
  .blog {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;

    &__post {
      width: 100%;
      position: relative;
      float: left;
      height: 350px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      filter: brightness(70%);
    }

    &__title {
      font-size: 32px;
      line-height: 32px;
      color: #fff;
      font-weight: 300;
      text-align: center;
      z-index: 2;
      margin-bottom: 2rem;
    }

    &__link {
      height: 48px;
      border: 1px solid #fff;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: 46px;
      display: block;
      z-index: 2;
      padding: 0 48px;
      text-align: center;
      text-decoration: none;

      &:hover {
        background-color: rgba( 255, 255, 255, .1 );
      }
    }
  }
</style>
