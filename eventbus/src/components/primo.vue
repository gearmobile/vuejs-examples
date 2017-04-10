<template lang="pug">
  #primo
    .well
      h2 primo component
      h4 {{ getData }}
      pre Status from parent component - {{ status }}
      pre Header from parent component - {{ header }}
      pre Data from parent component - {{ datas }}
      button.btn.btn-primary( type="button", @click="onSend" ) send data
</template>

<script>
  import eventBus from '../config/event-bus.js'

  export default {
    name: 'primo',
    data () {
      return {
        getData: '',
        nativePrimoData: 'native primo data',
        anotherData: 'anoter data from primo component',
        status: '',
        header: '',
        datas: ''
      }
    },
    methods: {
      onSend () {
        const send = this.getData + ' from primo component'
        eventBus.$emit('sendPrimoEvent', send, this.nativePrimoData, this.anotherData)
      }
    },
    created () {
      eventBus.$on('sendEvent', data => {
        this.getData = data
      })
      eventBus.$on('sendResponse', data => {
        this.status = data.status
        this.header = data.header
        this.datas = data.datas
      })
    }
  }
</script>

<style lang="scss" scoped>
  #primo {
    text-align: left;
  }
</style>
