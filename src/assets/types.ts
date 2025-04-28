type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

type TodosResponse = {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}

export type { Todo, TodosResponse }
