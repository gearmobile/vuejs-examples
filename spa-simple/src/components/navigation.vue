<template lang="pug">
  header.header
    .header__wrapper
      img.header__logo( src="http://acmelogos.com/images/logo-8.svg", alt="Simple SPA" )
      nav.header__menu.nav
        router-link.nav__item( to="/", tag="a" ) home
        router-link.nav__item( to="/brands", tag="a" ) brands
        router-link.nav__item( to="/blog", tag="a", active-class="nav__item--active" ) blog
        router-link.nav__item( to="/contacts", tag="a" ) contacts
        router-link.nav__item( to="/projects", tag="a" ) projects
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    &__wrapper {
      max-width: 1000px;
      margin: 0 auto;
      padding: 18px 30px 20px;
    }

    &__logo {
      display: block;
      height: 40px;
      object-fit: cover;
      float: left;
      margin-right: 50px;
    }
    
    &__menu {
      font-size: 16px;
      padding: 10px 0 14px;
      height: 40px;
      font-weight: 500;
    }

    & .nav {

      &__item {
        margin: 0 26px 0 0;
        color: rgba(10, 10, 10, 1);

        &.router-link-active {
          color: rgba(255, 255, 255, 1);
        }

        &--active {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
</style>
