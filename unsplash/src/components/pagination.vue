<template lang="pug">
  nav#pagination.pagination.is-centered
    a.pagination-previous( @click="onChangePage(Back)", v-show="isBack()" ) Previous
    a.pagination-next( @click="onChangePage(Forward)", v-show="isForward()" ) Next Page
    ul.pagination-list
      //- li: a.pagination-link {{ 1 }}
      //- li: span.pagination-ellipsis &hellip;
      //- li: a.pagination-link {{ currPage - 1 }}
      li: a.pagination-link.is-current {{ currPage }}
      li: a.pagination-link {{ currPage + 1 }}
      li: span.pagination-ellipsis &hellip;
      li: a.pagination-link {{ totalPages }}
</template>

<script>
  
  export default {
    name: 'pagination',
    data () {
      return {
        datas: ''
      }
    },
    props: {
      currPage: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 0
      },
      perPage: {
        type: Number,
        default: 9
      }
    },
    computed: {
      totalPages () {
        return Math.ceil(this.total / this.perPage)
      },
      Back () {
        const currNumber = this.currPage - 1
        return currNumber
      },
      Forward () {
        const currNumber = this.currPage + 1
        return currNumber
      }
    },
    methods: {
      onChangePage (value) {
        this.$emit('pageChanged', value)
      },
      isBack () {
        return this.Back > 0
      },
      isForward () {
        return this.Forward < this.totalPages
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
