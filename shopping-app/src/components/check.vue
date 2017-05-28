<template lang="pug">
  .check
    header.check__header
      h2.page-header.text-center.text-capitalize check yourself
      textarea.form-control( rows="4", v-model="text", @keyup.enter="onEnter()", :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }" ) {{ text }}
</template>

<script>
  const initialText = 'Me is sad because he is more clever than I.'
  const correctText = 'I am sad because he is more clever than me.'

  export default {
    name: 'check',
    data () {
      return {
        text: initialText,
        isCorrect: false
      }
    },
    methods: {
      onEnter () {
        const text = this.text.trim()
        this.isCorrect = text === correctText
      }
    },
    computed: {
      isCorrect () {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
.shopping {

  &__label {
    text-transform: capitalize;
  }
}
  .removed {
    font-style: italic;
    color: rgba( 0,0,0, .24 )
  }
</style>
