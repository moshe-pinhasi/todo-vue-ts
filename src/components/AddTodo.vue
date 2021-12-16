<template>
  <div class="add-todo">
    <h3 class="title has-text-grey has-text-centered">Add New Todo</h3>
    <form @submit.prevent="submit">
      <div class="field">
        <InputCmp name="title" v-model="todo.title" >
        Title
        </InputCmp>
        <p v-if="errors.title" class="error">{{errors.title}}</p>
      </div>
      <div class="field">
        <InputCmp name="description" type="description" v-model="todo.description" >
        Description
        </InputCmp>
        <p v-if="errors.description" class="error">{{errors.description}}</p>
      </div>
      <button class="btn btn-filled"
              type="submit"
              :class="{'is-loading': loading}"
              :disabled="!isSubmitAllowed">Add</button>
      <p v-if="errors.general" class="error">{{errors.general}}</p>
    </form>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

import InputCmp from '@/components/InputCmp.vue';
import {todoService} from '@/services/todo.service';

import {INewTodo, IAddTodoError} from '@/interfaces'

export default Vue.extend({
  name: 'AddTodo',
  components: {
    InputCmp
  },
  props: {
    errors: {
      type: Object as PropType<IAddTodoError>,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      todo: todoService.getEmptyTodo() as INewTodo
    }
  },
  computed: {
    isSubmitAllowed(): Boolean {
      const {title, description} : {title: String, description: String} = this.todo
      return !!title
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.todo)
      this.todo = todoService.getEmptyTodo()
    }
  }
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