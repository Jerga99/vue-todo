

<template>
  <div class="todo-list">
    <todo-item
      v-bind:title="'Walk the dog'"
      v-bind:description="'Go to forrest near the Zoo'" />
    <todo-item
      :title="'Buy a bread'"
      :description="'Whole grain bread would be good'"/>
    <todo-item
      :title="todoTitle"
      :description="todoDescription" />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoTitle: 'Learn Programming',
      todoDescription: 'Preferable Tomorrow!'
    }
  }
}
</script>












