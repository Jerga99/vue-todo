
import Vue from 'vue'


const store = {
  state: {
    todos: [
      {
        _id: '1',
        title: 'Walk the dog',
        description: 'Go to forrest near the Zoo'
      },
      {
        _id: '2',
        title: 'Buy a bread',
        description: 'Whole grain bread would be good'
      },
      {
        _id: '3',
        title: 'Learn Programming',
        description: 'Preferable Tomorrow!'
      }
    ]
  },
  actions: {
    createTodo(state, todo) {
      todo._id = Math.random().toString(36).substr(2, 7)
      state.todos.push(todo)
    },
    updateTodo(state, todoToUpdate) {
      const index = state.todos.findIndex((todo) => {
        return todo._id === todoToUpdate._id
      })

      Vue.set(state.todos, index, todoToUpdate)
    }
  }
}

store.dispatch = function(action, payload) {
  if (!this.actions[action]) {
    throw new Error(`Action ${action} is not defined in the store`)
  }

  return this.actions[action](this.state, payload)
}





export default store
