import { todoService } from '../services/todo.service'

import { ActionContext } from 'vuex'

import {ITodo, INewTodo, IRootState, ITodoState} from '../interfaces'

export const todoStore = {
    state: {
        todos: Array<ITodo>(),
    },
    getters: {
        todos(state: ITodoState): Array<ITodo> {
            return state.todos
        }
    },
    mutations: {
        setTodos(state: ITodoState, {todos}: {todos: ITodo[]}) {
            state.todos = todos;
        },
        addTodo(state: ITodoState, {todo}: {todo: ITodo}) {
            state.todos.push(todo);
        },
        removeTodo(state: ITodoState, {todo}: {todo: ITodo}) {
            state.todos = state.todos.filter(t => t._id !== todo._id);
        },
    },
    actions: {
        async loadTodos(context: ActionContext<ITodoState, IRootState>){
            try {
                const todos: ITodo[] = await todoService.query();
                context.commit({type: 'setTodos', todos})
            } catch (err) {
                console.log(err);
            }
        },
        async addTodo(context: ActionContext<ITodoState, IRootState>, {todo}: {todo: INewTodo}){
            try {
                const res: ITodo = await todoService.add(todo);
                context.commit({type: 'addTodo', todo: res})
            } catch (err) {
                console.log(err);
            }
        },
        async removeTodo({commit}: ActionContext<ITodoState, IRootState>, {todo}: {todo: ITodo}) {
            try {
                await todoService.remove(todo._id)
                commit({ type: 'removeTodo', todo })
            } catch (err) {
                console.log(err);
            }
        },
    }
}