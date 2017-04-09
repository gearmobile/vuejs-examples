<template lang="pug">
  .primo
    .jumbotron
      h1 axios example
      h4 axios is a library not just for vue
    
    // get simple request
    .panel.panel-primary
      .panel-heading get simple request
      .panel-body
        .bnt-group( role="group" )
          button.btn.btn-primary( type="button", @click="onSimpleRequest" ) get request
          button.btn.btn-warning( type="button", @click="onSimpleClear" ) clear request
          .panel-body( v-if="isSimpleShow" )
            h3 result
            h4 status
            pre {{ status }} {{ statusText }}
            h4 headers
            pre {{ header }}
            h4 data
            pre {{ datas }}
          .panel-body( v-if="isSimpleError" )
            h3 result
            h4 status
            pre {{ status }}
            h4 error message
            pre {{ message }}
    
    // get request with parameters
    .panel.panel-primary
      .panel-heading get request with parameter
      .panel-body
        .bnt-group( role="group" )
          input.form-control( type="text", placeholder="Enter ID of request here ...", v-model.trim="requestID", required )
          button.btn.btn-primary( type="button", @click="onComplexRequest" ) get request
          button.btn.btn-warning( type="button", @click="onComplexClear" ) clear request
          .panel-body( v-if="isComplexShow" )
            h3 result
            h4 status
            pre {{ status }} {{ statusText }}
            h4 headers
            pre {{ header }}
            h4 data
            pre {{ datas }}
          .panel-body( v-if="isComplexError" )
            h3 result
            h4 status
            pre {{ status }}
            h4 error message
            pre {{ message }}
    
    // post request
    .panel.panel-primary
      .panel-heading post request 
      .panel-body
        form.form-inline
          .form-group
            input.form-control( type="text", placeholder="Enter number more than 200", title="Enter number more than 200", v-model.trim.number="postID" )
          button.btn.btn-primary( type="submit", @click.prevent="onPost" ) send request
        button.btn.btn-warning( type="button", @click="onPostClear" ) clear input
        .panel-body( v-if="isPostSuccess" )
            h3 result
            h4 status
            pre {{ status }} {{ statusText }}
            h4 headers
            pre {{ header }}
            h4 data
            pre {{ datas }}
        .panel-body( v-if="isPostError" )
          h3 result
          h4 status
          pre {{ status }}
          h4 error message
          pre {{ message }}

</template>

<script>
  const url = 'https://jsonplaceholder.typicode.com/todos'
  export default {
    name: 'primo',
    data () {
      return {
        status: '',
        header: '',
        datas: '',
        message: '',
        isSimpleShow: false,
        isSimpleError: false,
        isComplexShow: false,
        isComplexError: false,
        isPostSuccess: false,
        isPostError: false,
        requestID: '',
        postID: ''
      }
    },
    computed: {
      statusText () {
        if (this.status === 200) {
          return 'OK'
        } else {
          return ''
        }
      }
    },
    methods: {
      // POST METHODS
      onPost () {
        if (this.postID && this.postID > 200) {
          this.axios.post(url, {
            userId: this.postID,
            id: this.postID,
            title: 'title from vuejs',
            completed: false
          })
          .then(response => {
            this.fillSuccessData(response)
            this.isPostSuccess = true
          })
          .catch(error => {
            this.fillErrorData(error)
            this.isPostError = true
          })
        } else {
          alert('Enter number more than 200')
        }
      },
      onPostClear () {
        this.postID = ''
        this.isPostSuccess = false
        this.isPostError = false
      },
      // COMPLEX REQUEST METHODS
      onComplexRequest () {
        this.axios.get(url, {
          params: {
            id: this.requestID
          }
        })
          .then(response => {
            this.requestID = ''
            this.fillSuccessData(response)
            this.isComplexShow = true
          })
          .catch(error => {
            this.fillErrorData(error)
            this.isComplexError = true
          })
      },
      onComplexClear () {
        this.clearData()
        this.isComplexShow = false
        this.isComplexError = false
        this.requestID = ''
      },
      // SIMPLE REQUEST METHODS
      onSimpleRequest () {
        this.axios.get(url)
          .then(response => {
            this.fillSuccessData(response)
            this.isSimpleShow = true
          })
          .catch(error => {
            this.fillErrorData(error)
            this.isSimpleError = true
          })
      },
      onSimpleClear () {
        this.clearData()
        this.isSimpleShow = false
        this.isSimpleError = false
      },
      // HELPER METHODS
      clearData () {
        this.status = ''
        this.statusText = ''
        this.header = ''
        this.datas = ''
      },
      fillSuccessData (value) {
        this.status = value.status
        this.statusText = value.statusText
        this.header = JSON.stringify(value.headers, null, '\t')
        this.datas = JSON.stringify(value.data, null, '\t')
      },
      fillErrorData (value) {
        this.message = value.message
        this.status = value.response.status
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    font-weight: 700;
    text-transform: capitalize;
  }
  h4 {
    font-weight: 700;
    text-transform: capitalize;

    &::after {
      content: ':'
    }
  }
</style>
