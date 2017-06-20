<template lang="pug">
  
  .order( v-if="orderShow" )
    h2.page-header.text-center Заказ на уборку
    
    .row
      
      // COLUMN PRIMARY
      .col-md-8

        // section contacts
        section.order__section.well
          h5.order__title Контактные данные
          .form-group
            label.order__label( for="phone" ) phone
            input.form-control( id="phone", name="phone", type="tel", v-model="customer.phone" )
          .form-group
            label.order__label( for="name" ) name
            input.form-control( id="name", anme="name", type="text", v-model="customer.name" )
          .form-group
            label.order__label( for="email" ) email
            input.form-control( id="email", name="email", type="email", v-model="customer.email" )

        // section date
        section.order__section.well
          h5.order__title Дата и время
          .row
            .col-md-6
              .form-group
                label.order__label( for="date" ) дата
                input.form-control( id="date", name="date", type="date", v-model="customer.date" )
            .col-md-6
              .form-group
                label.order__label( for="time" ) время
                input.form-control( id="time", name="time", type="time", v-model="customer.time" )

        // section address
        section.order__section.well
          h5.order__title Адрес
          .form-group
            label.order__label( for="street" ) улица, дом, номер квартиры
            input.form-control( id="street", name="street", type="text", v-model="customer.street" )
          .form-group
            label.order__label( for="entrance" ) подъезд
            input.form-control( id="entrance", name="entrance", type="number", v-model="customer.entrance" )
          .form-group
            label.order__label( for="floor" ) этаж
            input.form-control( id="floor", name="floor", type="number", v-model="customer.floor" )
          .form-group
            label.order__label( for="doorphone" ) домофон
            input.form-control( id="doorphone", name="doorphone", type="number", v-model="customer.doorphone" )

        // section metro
        section.order__section.well
          h5.order__title Метро
          select.form-control( v-model="customer.metro" )
            option( v-for="(metro, index) in metros", :key="index", :value="metro.value" ) {{ metro.title }}
          .order__wrapper
            label
              input( type="checkbox", v-model="customer.hoover" )
              | у меня нет пылесоса

        // section comments
        section.order__section.well
          h5.order__title Комментарии и пожелания
          textarea.form-control( rows="4", v-model="customer.comments" )

      // COLUMN SECONDARY
      .col-md-4

        // section conclusion
        section.order__section.well
          p Уборка 1-комнатной квартиры с 1 ванной комнатой
          p Уборка займет 3 часа.
          h5.order__title К вам приедет
          p один специалист

        // section sum
        section.order__section.well
          p К оплате:1 980 р.

        // section continue
        section.order__section
          button.btn.btn-primary.btn-lg( type="button" ) продолжить
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'order',
    data () {
      return {
        customer: {
          phone: 'Телефон',
          name: 'Имя',
          email: 'Email',
          date: null,
          time: null,
          street: null,
          entrance: null,
          floor: null,
          doorphone: null,
          metro: 'zero',
          hoover: false,
          comments: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        orderShow: 'getOrder',
        metros: 'getMetros'
      })
    }
  }
</script>

<style lang="scss" scoped>

  .order {

    &__section {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__title {
      margin-bottom: 30px;
    }

    &__label {
      text-transform: capitalize;
    }

    &__wrapper {
      padding-top: 30px;
    }
  }
</style>
