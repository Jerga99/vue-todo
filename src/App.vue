
<!-- HTML part -->
<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">

      </div>
    </div>
  </div>
</template>

<!-- JS part -->
<script>
import playground from './playground'

export default {
  name: 'app',
  // This function is run automaticaly by VUE framework
  created() {
    playground()
  }
}
</script>

<!-- Stylings, css, scss.... -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-wrapper {
  /* flexible styling */
  display: flex;

  /* it defines alignment along the main axis */
  justify-content: center;

  /*flex-direction: column;*/
  width: 100%;
  /*height: 2000px;*/
}

.todo-container {
  width: 400px;
  min-height: 400px;
  background-color: #ededed;
}


</style>











