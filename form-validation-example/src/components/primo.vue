<template lang="pug">
  #primo
    .container.mt-3.mt-sm-5
      .row.justify-content-center
        .col-md-6
          form( @click="onSubmit" )
            .form-group
              label.form-group-label( for="name" )
                | name
              input.form-control.form-control-warning( type="text", name="name", id="name", :class="wrongNameWarning", v-model.trim="name" )
              .form-control-feedback( v-if="submit && wrongName" )
                | This field is required
            .form-group
              label.form-group-label( for="number" )
                | number
              input.form-control.form-control-warning( type="text", id="number", name="number", :class="wrongNumberWarning", v-model.trim="number" )
              .form-control-feedback( v-if="submit && wrongNumber" )
                | Make sure this is a number between 1 and 10
            button.btn.btn-primary
              | submit
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        submit: false,
        name: '',
        number: null
      }
    },
    computed: {
      wrongName () {
        return this.name === ''
      },
      wrongNumber () {
        return (this.isNumeric(this.number) === false || this.number < 1 || this.number > 10)
      },
      wrongNameWarning () {
        return {
          'has-warning': this.submit && this.wrongName
        }
      },
      wrongNumberWarning () {
        return {
          'has-warning': this.submit && this.wrongNumber
        }
      }
    },
    methods: {
      isNumeric (number) {
        return !isNaN(parseFloat(number) && isFinite(number))
      },
      onSubmit (event) {
        this.submit = true
        if (this.wrongName || this.wrongNumber) {
          event.preventDefault()
          console.log('something wrong')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-group-label {
    text-transform: capitalize;
    color: forestgreen;
    font-size: 20px;
    margin-left: 10px;
  }
  .form-control-feedback {
    opacity: .8;
    font-style: italic;
    font-size: 14px;
    color: firebrick;
  }
</style>
