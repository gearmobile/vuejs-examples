<template lang="pug">
  #secondo
    .well
      h2 secondo component
      p {{ secondoData }}
      p {{ nativePrimoData }}
      p {{ anotherData }}
      pre {{ status }}
      pre {{ header }}
</template>

<script>
  import eventBus from '../config/event-bus.js'
  
  export default {
    name: 'secondo',
    data () {
      return {
        secondoData: '',
        nativePrimoData: '',
        anotherData: '',
        status: '',
        header: ''
      }
    },
    created () {
      eventBus.$on('sendPrimoEvent', (data1, data2, data3) => {
        this.secondoData = data1
        this.nativePrimoData = data2
        this.anotherData = data3
      })
    },
    activated () {
      eventBus.$on('sendError', data => {
        this.status = data.status
        this.header = data.header
      })
    }
  }
</script>

<style lang="scss" scoped>
  #secondo {
    text-align: left;
  }
</style>
