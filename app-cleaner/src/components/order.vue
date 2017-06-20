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
            label( for="phone" ) Phone
            input.form-control( id="phone", name="phone", type="tel", v-model="customer.phone" )
          .form-group
            label( for="name" ) Name
            input.form-control( id="name", anme="name", type="text", v-model="customer.name" )
          .form-group
            label( for="email" ) Email
            input.form-control( id="email", name="email", type="email", v-model="customer.email" )

        // section date
        section.order__section.well
          h5.order__title Дата и время
          .row
            .col-md-6
              .form-group
                label( for="date" ) Дата
                input.form-control( id="date", name="date", type="date", v-model="customer.date" )
            .col-md-6
              .form-group
                label( for="time" ) Время
                input.form-control( id="time", name="time", type="time", v-model="customer.time" )

        // section address
        section.order__section.well
          h5.order__title Адрес
          input.form-control( type="text", placeholder="улица, дом, номер квартиры" )
          input.form-control( type="text", placeholder="подъезд" )
          input.form-control( type="text", placeholder="этаж" )
          input.form-control( type="text", placeholder="домофон" )

        // section metro
        section.order__section.well
          h5.order__title Метро
          select.form-control
          label
            input( type="checkbox" )
            | у меня нет пылесоса

        // section comments
        section.order__section.well
          h5.order__title Комментарии и пожелания
          textarea.form-control( rows="4" )

      // COLUMN SECONDARY
      .col-md-4

        // section conclusion
        section.well.order__section
          p Уборка 1-комнатной квартиры с 1 ванной комнатой
          p Уборка займет 3 часа.
          h5.order__title К вам приедет
          p один специалист

        // section sum
        section.order__section
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
          time: null
        }
      }
    },
    computed: {
      ...mapGetters({
        orderShow: 'getOrder'
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
  }
</style>
