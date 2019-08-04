


<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{title}}
      </div>
      <div class="todo-item-content-description">
        {{description}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ['title', 'description'],
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: 'Default Description'
    }
    // Array, Object, String, Number, Boolean, Function
  }
}
</script>

<style scoped lang="scss">
  .todo {
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
