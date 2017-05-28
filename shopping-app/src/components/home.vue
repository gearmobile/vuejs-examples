<template lang="pug">
  .shopping
    h2.shopping__title.page-header.text-center.text-capitalize {{ title }}
    ul.list-unstyled
      li( v-for="(item, index) in items", :key="index", :class="{ 'removed': item.checked }" )
        .checkbox
          input( type="checkbox", id="item", :checked="item.checked" )
          label.shopping__label( for="item" ) {{ item.caption }}
    footer.footer
      hr
      em Change the title of your shopping list here
      .input-group
        input.form-control.text-capitalize( type="text", placeholder="add new item here ...", v-model.trim="newItem", @keyup.enter="onAddItem" )
        span.input-group-btn
          button.btn.btn-primary.text-capitalize( type="button" ) add new item!
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        title: 'my shopping list',
        items: [
          { caption: 'bananas', checked: true },
          { caption: 'apples', checked: false },
          { caption: 'mango', checked: false }
        ],
        newItem: null
      }
    },
    methods: {
      onAddItem () {
        const item = this.newItem.trim()
        if (item) {
          this.items.push({
            caption: item,
            checked: false
          })
        }
        this.newItem = null
      }
    }
  }
</script>

<style lang="scss" scoped>
.shopping {

  &__label {
    text-transform: capitalize;
  }
}
  .removed {
    font-style: italic;
    color: rgba( 0,0,0, .24 )
  }
</style>
