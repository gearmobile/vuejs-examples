<template lang="pug">
  #alert.alert.alert-warning.alert-dismissible( role="alert" )
    button.close( type="button", data-dismiss="alert", aria-label="Close" )
      span( aria-hidden="true" ) &times;
    <strong>Warning!</strong> Customer <strong>{{ firstName }} {{ lastName }}</strong> was added!
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      //
    }
  },
  props: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
