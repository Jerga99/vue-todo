
<!-- HTML part -->
<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <div clas="todo-list">
          <div class="todo-item">
            <div class="todo-item-content">
              <div class="todo-item-content-title">
                Walk the dog
              </div>
              <div class="todo-item-content-description">
                Go to forrest near the Zoo
              </div>
            </div>
          </div>
          <div class="todo-item">
            <div class="todo-item-content">
              <div class="todo-item-content-title">
                Buy a bread
              </div>
              <div class="todo-item-content-description">
                Whole grain bread would be good
              </div>
            </div>
          </div>
          <div class="todo-item">
            <div class="todo-item-content">
              <div class="todo-item-content-title">
                Learn programming
              </div>
              <div class="todo-item-content-description">
                Tomorrow would be best!
              </div>
            </div>
          </div>
        </div>
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
<style lang="scss">

$color-red: red;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo {
  &-wrapper {
    /* flexible styling */
    display: flex;

    /* it defines alignment along the main axis */
    justify-content: center;

    /*flex-direction: column;*/
    width: 100%;
    /*height: 2000px;*/
  }

  &-container {
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }

  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;

    &-content {
      &-title {
        font-weight: bold;
      }

      &-description {
        font-size: 19px;
      }
    }
  }
}

</style>











