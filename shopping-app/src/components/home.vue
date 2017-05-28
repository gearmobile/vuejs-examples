<template lang="pug">
  #shopping
    h2.shopping__title.page-header.text-center.text-capitalize {{ title }}
    ul.list-unstyled
      li( v-for="(item, index) in items", :key="index", :class="{ 'removed': item.checked }" )
        .checkbox
          input( type="checkbox", id="item", :checked="item.checked" )
          label( for="item" ) {{ item.caption }}
    footer.footer
      hr
      em Change the title of your shopping list here
      input.form-control( type="text", placeholder="change the title", v-model="title" )
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        title: 'my shopping list',
        items: [
          { caption: 'Bananas', checked: true },
          { caption: 'Apples', checked: false },
          { caption: 'Mango', checked: false }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .removed {
    font-style: italic;
    color: rgba( 0,0,0, .24 )
  }
</style>
