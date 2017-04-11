<template lang="pug">
  #app
    .conteiner
      .row
        .col-md-8.col-md-offset-2
          .well.well-lg
            h2 parent component
              .form-group
                label( for="value" )
                input.form-control( type="text", id="value", placeholder="Enter value", v-model.trim="value", @keyup.enter="onEnter" )
              .form-group
                button.btn.btn-primary( type="button", @click="onGet" ) get data
                button.btn.btn-primary( type="button", @click="onTransfer" ) transfer data
                button.btn.btn-primary( type="button", @click="onSend" ) send data
                button.btn.btn-primary( type="button", @click="onClear" ) clear data
              pre parent value is - {{ state }}
          component( :is="currView" )
</template>

<script>
  import eventBus from './config/eventbus.js'

  import Primo from './components/primo'
  import Success from './components/success.vue'
  import compError from './components/comperror.vue'

  const url = 'https://jsonplaceholder.typicode.com/posts'

  export default {
    name: 'app',
    data () {
      return {
        state: '',
        value: '',
        data: {},
        currView: ''
      }
    },
    methods: {
      onGet () {
        const config = {
          params: {
            _limit: 3
          }
        }
        this.axios.get(url, config)
          .then(response => {
            this.data = response.data
            this.state = response.status
            this.currView = 'appSuccess'
          })
          .catch(error => {
            this.state = error.message
            this.currView = 'appError'
          })
      },
      onTransfer () {
        eventBus.$emit('dataTransfer', this.data)
      },
      onSend () {
        eventBus.$emit('sendValue', this.state)
      },
      onEnter () {
        this.state = this.value
      },
      onClear () {
        this.state = ''
        this.value = ''
      }
    },
    components: {
      appPrimo: Primo,
      appSuccess: Success,
      appError: compError
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .btn {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
