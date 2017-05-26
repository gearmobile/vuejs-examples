<template lang="pug">
  table.grid
    tr
      cell( name="1" )
      cell( name="2" )
      cell( name="3" )
    tr
      cell( name="4" )
      cell( name="5" )
      cell( name="6" )
    tr
      cell( name="7" )
      cell( name="8" )
      cell( name="9" )
</template>

<script>
  import Cell from './cell.vue'

  export default {
    name: 'grid',
    components: {
      Cell
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    background-color: #34495e;
    color: #fff;
    width: 100%;
    border-collapse: collapse;
  }

  .gameStatus {
    margin: 0px;
    padding: 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #f1c40f;
    color: #fff;    
    font-size: 1.4em;
    font-weight: bold;
  }

  .statusTurn {
      background-color: #f1c40f;
  }

  .statusWin {
      background-color: #2ecc71;
  }

  .statusDraw {
      background-color: #9b59b6;
  }
</style>
