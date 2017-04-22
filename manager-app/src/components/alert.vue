<template lang="pug">
  .alert.alert-warning.alert-dismissible( role="alert" )
    button.close( type="button", data-dismiss="alert", aria-label="Close" )
      span( aria-hidden="true" ) &times;
    p {{ warning }}
    //- <strong>Warning!</strong> Better check yourself, you're not looking too good.
</template>

<script>
  export default {
    name: 'alert',
    props: ['warning']
  }
</script>

<style lang="scss" scoped>
// 
</style>
