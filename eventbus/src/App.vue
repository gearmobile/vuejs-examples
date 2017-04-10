<template lang="pug">
  #app
    .container
      .row
        .col-md-8.col-md-offset-2
          .well
            .btn-group
              button.btn.btn-primary( type="button", @click="onSend" ) send data
              button.btn.btn-primary( type="button", @click="onGet" ) get data
              button.btn.btn-primary( type="button", @click="onClear" ) clear data
            //- keep-alive
            component( :is="currView" )
</template>

<script>
  import Primo from './components/primo'
  import Secondo from './components/secondo.vue'
  import eventBus from './config/event-bus.js'

  const url = 'https://jsonplaceholder.typicode.com/photos'

  export default {
    name: 'app',
    data () {
      return {
        text: 'parent text',
        currView: ''
      }
    },
    components: {
      appPrimo: Primo,
      appSecondo: Secondo
    },
    methods: {
      onSend () {
        eventBus.$emit('sendEvent', this.text)
      },
      onGet () {
        const config = {
          params: {
            _limit: 3
          }
        }
        this.axios.get(url, config)
          .then(response => {
            const args = {
              status: response.status,
              header: JSON.stringify(response.headers, null, '\t'),
              datas: JSON.stringify(response.data, null, '\t')
            }
            eventBus.$emit('sendResponse', args)
            this.currView = 'appPrimo'
          })
          .catch(error => {
            const args = {
              status: error.response.status,
              header: JSON.stringify(error.response.headers, null, '\t')
            }
            eventBus.$emit('sendError', args)
            this.currView = 'appSecondo'
          })
      },
      onClear () {
        this.currView = ''
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .btn {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
