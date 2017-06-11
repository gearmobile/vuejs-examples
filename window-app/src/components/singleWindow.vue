<template lang="pug">
  .single-window

    // SET WINDOW DIMENTIONS
    h2.page-header Одинарное окно
    section.well
      h3.page-header Размеры окна:
      .form-group
        label.single-window__label
          | Window Height: 
          span {{ heightWindow }}мм
          input.single-window__input(:min='minH', :max='maxH', :step='stepH', type='range', v-model='height')
      .form-group
        label.single-window__label
          | Window Width: 
          span {{ widthWindow }}мм
          input.single-window__input(:min='minW', :max='maxW', :step='stepW', type='range', v-model='width')

    // SET TYPE WINDOW
    section.well
      h3.page-header Тип окна:
      .row
        .col-md-6
          h4.page-header Выберите тип окна:
          .radio(v-for='(type, index) in types')
            label(:for='type.title')
              input(:id='type.title', name='type', type='radio', :value='type.title', v-model='window')
              |  {{ type.name }}
        .col-md-6
          h4.page-header Предпросмотр типа окна:
          figure.picture
            img.picture__inner(:src='previewWindow', alt='Window Preview')

    // PROFILES
    section.form-group.well
      h3.page-header Профиль:
      .radio
        label.item.list-group-item.text-capitalize(v-for='(profile, index) in profiles', :key='index')
          input(type='radio', :value='profile.title', name='check-profile', v-model='profileType')
          header.item__wrapper(@click='profile.show = !profile.show')
            h4.item__title.text-capitalize {{ profile.title }}
            h3.item__label {{ profile.details.type }}
          transition
            footer.item__content.bg-info(v-if='profile.show')
              h4.item__subtitle {{ profile.details.type }}
              .row
                .col-xs-6
                  ul
                    li Стеклопакет: {{ profile.details.packet }}
                    li Формула: {{ profile.details.formula }}
                    li Фурнитура: {{ profile.details.furnitura }}
                    li Базовый цвет: {{ profile.details.color }}
                    li Уплотнитель: {{ profile.details.sealer }}
                .col-xs-6
                  figure
                    img.img-responsive.img-thumbnail(:src='profile.preview', :alt='profile.title')

    // ADDITIONS
    section.well
      h3.page-header Дополнительно:
      .checkbox
        label.checkbox-inline(for='uno')
          input#uno(type='checkbox', value='montage', v-model='window.checked')
          |  Монтаж
          p.text-muted +{{ montageCost | roundDown }} руб
      .checkbox
        label.checkbox-inline(for='duo')
          input#duo(type='checkbox', value='sill', v-model='window.checked')
          |  Подоконник
          p.text-muted +{{ sillCost | roundDown }} руб
      .checkbox
        label.checkbox-inline(for='tre')
          input#tre(type='checkbox', value='slope', v-model='window.checked')
          |  Откосы
          p.text-muted +{{ slopeCost | roundDown }} руб


</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'singleWindow',
    computed: {
      ...mapGetters({
        heightWindow: 'windowHeight',
        widthWindow: 'windowWidth',
        minH: 'minHeight',
        maxH: 'maxHeight',
        stepH: 'stepHeight',
        minW: 'minWidth',
        maxW: 'maxWidth',
        stepW: 'stepWidth',
        types: 'windowTypes',
        previewWindow: 'windowPreview',
        profiles: 'getProfiles'
      }),
      height: {
        get () {
          return this.$store.state.singleWindow.sizes.height
        },
        set (value) {
          this.$store.dispatch('updateHeight', value)
        }
      },
      width: {
        get () {
          return this.$store.state.singleWindow.sizes.width
        },
        set (value) {
          this.$store.dispatch('updateWidth', value)
        }
      },
      window: {
        get () {
          return this.$store.state.checked.window
        },
        set (value) {
          this.$store.dispatch('updateWindowType', value)
        }
      },
      profileType: {
        get () {
          return this.$store.state.checked.profile
        },
        set (value) {
          this.$store.dispatch('updateWindowProfile', value)
        }
      }
    },
    methods: {
      ...mapActions({
        // onUp: 'increase',
        // onDown: 'decrease'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .single-window {

    &__label {
      width: 100%;
    }

    &__input {
      margin-top: 15px;
      width: 80%;
      margin-left: 10%;
    }
  }
</style>
