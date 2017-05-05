<template lang="pug">
  #primo.primo
    button.btn.btn-info( @click="onShow" ) Show Modal
    transition( name="showModal", @enter="onEnter", @leave="onLeave" )
      .panel.panel-default( v-if="modalShowing" )
        .panel-heading
          h3.panel-title.text-center Compose New Tweet
        .panel-body
          form

            // output section
            .form-group
              textarea.form-control( rows="6", placeholder="Write your tweet here", v-model="tweet" )
            
            // upload section
            .form-group.primo__upload
              input.hidden( type="file", ref="photoUpload", @change="handlePhotoUpload", multiple )
            
            // control section
            .form-group.primo__control
              .col-md-9.primo__primary
                div
                  i.primo__load.fa.fa-camera.fa-lg( aria-hidden="true", @click="triggerFileUpload" )
              .col-md-3.primo__secondary
                span( :class="{ 'text-warning': underTwentyMark, 'text-danger': underTenMark }" ) {{ charactersRemaining }}
                button.btn.btn-primary( :disabled="tweetIsOutOfRange" ) Tweet

            // section insert images
            .form-group.primo__insert
              section( v-if="photoHasBeenUploaded" )
                figure.primo__figure( v-for="(photo, index) in photos" )
                  img.img-responsive.img-thumbnail( :src="photo", alt="Uploaded photo" )
                  span.fa-stack.fa-lg.primo__remove( @click="removeFigure(index)" )
                    i.fa.fa-camera.fa-stack-1x( aria-hidden="true" )
                    i.fa.fa-ban.fa-stack-2x.text-danger( aria-hidden="true" )
</template>

<script>
  import Velocity from 'velocity-animate'
  const MAX_TWEET_LENGTH = 140

  export default {
    name: 'primo',
    data () {
      return {
        tweet: '',
        photos: [],
        modalShowing: false
      }
    },
    methods: {
      triggerFileUpload () {
        this.$refs.photoUpload.click()
      },
      handlePhotoUpload (event) {
        const self = this
        const files = event.target.files
        for (let i = 0; i < files.length; i += 1) {
          const reader = new FileReader()
          reader.onloadend = (event) => {
            self.photos.push(event.target.result)
          }
          reader.readAsDataURL(files[i])
        }
      },
      removeFigure (index) {
        this.photos.splice(index, 1)
      },
      onShow () {
        this.modalShowing = !this.modalShowing
      },
      onEnter (el, done) {
        Velocity(el, 'fadeIn', { duration: 300, complete: done })
      },
      onLeave (el, done) {
        Velocity(el, 'fadeOut', { duration: 300, complete: done })
      }
    },
    computed: {
      charactersRemaining () {
        return MAX_TWEET_LENGTH - this.tweet.length
      },
      tweetIsOutOfRange () {
        return this.charactersRemaining < 0 || this.charactersRemaining === MAX_TWEET_LENGTH
      },
      underTwentyMark () {
        return this.charactersRemaining <= 20 && this.charactersRemaining > 10
      },
      underTenMark () {
        return this.charactersRemaining <= 10
      },
      photoHasBeenUploaded () {
        return this.photos.length > 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .primo {

    & .panel {
      margin-bottom: 0;
    }

    &__control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
    }
    
    &__primary {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__secondary {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__load {
      cursor: pointer;
      &:hover {
        color: teal
      }
    }

    &__figure {
      position: relative;
    }

    &__remove {
      position: absolute;
      top: 2rem;
      left: 2rem;
      cursor: pointer;
    }
  }
</style>
