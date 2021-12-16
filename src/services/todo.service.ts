import {storageService} from './async-storage.service'
import {ITodo, INewTodo} from '../interfaces'

export const todoService = {
    query(): Promise<ITodo[]> {
        return storageService.query('todos')
    },
    add(todo: INewTodo): Promise<ITodo> {
        return storageService.post('todos', todo)
    },
    remove(todoId: string): Promise<void> {
        return storageService.remove('todos', todoId)
    },
    getEmptyTodo(): INewTodo {
        return {title: '', description: ''}
    }
}