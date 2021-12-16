<template>
  <div class="home">
    <add-todo @submit="add" :errors="errors" />
    <hr />
    <todo-list :todos="todos" @remove="remove" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AddTodo from '@/components/AddTodo.vue'; // @ is an alias to /src
import TodoList from '@/components/TodoList.vue'; // @ is an alias to /src

import {INewTodo, ITodo, IAddTodoError} from '@/interfaces'

export default Vue.extend({
  name: 'Home',
  components: {
    AddTodo,
    TodoList,
  },
  data() {
    return {
      errors: {} as IAddTodoError
    }
  },
  created() {
    this.$store.dispatch({type: 'loadTodos'});
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  },
  methods: {
    add(todo: INewTodo) {
      this.errors = {}
      if (!todo.description) {
        this.errors = {description: "this field can't be empty"}
        return
      }

      console.log('home:todo', todo);
      
      this.$store.dispatch({type: 'addTodo', todo});
    },
    remove(todo: ITodo) {
      this.$store.dispatch({type: 'removeTodo', todo});
    }
  }
});
</script>
