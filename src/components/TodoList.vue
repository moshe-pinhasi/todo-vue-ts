<template>
  <div class="todo-list">
    <h3 class="title has-text-grey has-text-centered">All Todos</h3>
    <ul>
      <li v-if="todos.length === 0">You have no todos :(</li>
      <li v-for="todo in todos" :key="todo._id">{{todo}} - <button @click="$emit('remove', todo)">remove</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

import {ITodo} from '@/interfaces'

export default Vue.extend({
  name: 'AddTodo',
  props: {
    todos: {
      type: Array as PropType<ITodo[]>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.add-todo {
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>