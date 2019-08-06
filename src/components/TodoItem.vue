


<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{title}}
      </div>
      <div class="todo-item-content-description">
        {{description}}
      </div>
    </div>
    <button
      @click="editMode = true"
      class="app-button is-warning">Edit</button>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input
          class="form-input"
          type="text">
      </div>
      <div class="form-control form-control-last">
        <label class="label">Description</label>
        <textarea
          cols="30"
          rows="2"
          class="form-input">
        </textarea>
      </div>
      <button
        @click="editMode = false"
        class="app-button is-warning">Update</button>
      <button
        @click="deleteTodo"
        class="app-button is-danger">Delete</button>
      </form>
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
  },
  data() {
    return {
      editMode: false
    }
  },
  methods: {
    editTodo() {
      alert('editing todo!')
    },
    deleteTodo() {
      alert('deleting todo!')
    }
  }
}
</script>

<style scoped lang="scss">
  .app-button {
    font-size: 15px;

    &.is-warning {
      margin-right: 5px;
    }
  }

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
        margin-bottom: 10px;

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
