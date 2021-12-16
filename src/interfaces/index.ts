export interface IAddTodoError {
    title?: string,
    description?: string,
    general?: string
  }

export interface INewTodo {
  title: string,
  description: string,
}

export interface ITodo {
  _id: string,
  title: string,
  description: string,
  createdAt: string,
  done: boolean
}

// store
export interface IRootState {
}

export interface ITodoState {
  todos: Array<ITodo>
}




// export interface IErrors {
//   username: String,
//   password: String,
//   general: String
// }

// export interface IUserCred {
//   username: String,
//   password: String,
// }

// export interface IUser {
//   _id: String,
//   username: String,
//   fullname: String,
//   createdAt: String,
// }

// // store
// export interface IRootState {
// }

// export interface IUserState {
//   loggedinUser: IUser | null,
// }