<template>
  <div id="app">
    <h1>Hello World</h1>
  </div>
</template>

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
