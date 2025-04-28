import type { Todo, TodosResponse } from '@/assets/types'

async function getWebTodos(): Promise<Todo[]> {
  try {
    const response = await fetch('https://dummyjson.com/todos')
    const json = (await response.json()) as TodosResponse
    return json.todos
  } catch {
    alert('Failed to connect to server to get tasks')
    return []
  }
}

export default getWebTodos
