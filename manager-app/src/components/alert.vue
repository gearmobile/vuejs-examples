<template lang="pug">
  .alert.alert-info.alert-dismissible( role="alert" )
    button.close( type="button", data-dismiss="alert", aria-label="Close" )
      span( aria-hidden="true" ) &times;
    p {{ warning }}
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
