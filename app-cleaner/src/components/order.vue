<template lang="pug">
  .order
    h2.page-header.text-center Заказ на уборку
    .row
      
      // column primary
      .col-md-8
        // section contacts
        section
          h5 Контактные данные
          .form-group
            input.form-control( type="phone", placeholder="телефон" )
          .form-group
            input.form-control( type="text", placeholder="имя" )
          .form-group
            input.form-control( type="email", placeholder="email" )
        // section date
        section
          h5 Дата и время
          .form-group
            select.form-control
            select.form-control
        // section address
        section
          h5 Адрес
          input.form-control( type="text", placeholder="улица, дом, номер квартиры" )
          input.form-control( type="text", placeholder="подъезд" )
          input.form-control( type="text", placeholder="этаж" )
          input.form-control( type="text", placeholder="домофон" )
        // section metro
        section
          h5 Метро
          select.form-control
          label
            input( type="checkbox" )
            | у меня нет пылесоса
        // section comments
        section
          h5 Комментарии и пожелания
          textarea.form-control( rows="4" )

      // column secondary
      .col-md-4
        // section conclusion
        section.well
          p Уборка 1-комнатной квартиры с 1 ванной комнатой
          p Уборка займет 3 часа.
          h5 К вам приедет
          p один специалист
        // section sum
        section
          p К оплате:1 980 р.
        // section continue
        section
          button( type="button" ) продолжить
</template>

<script>
export default {
  name: 'primo'
}
</script>

<style scoped>
  /**/
</style>
