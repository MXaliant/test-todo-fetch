<template>
  <main>
    <TodoList :todos="todos" />
  </main>
</template>

<script setup lang="ts">
import type { Todo } from '@/assets/types'
import getWebTodos from '@/components/fetchData'
import TodoList from '@/components/TodoList.vue'
import { ref, onMounted } from 'vue'

const todos = ref<Todo[]>([])

onMounted(async () => {
  const webTodos = await getWebTodos()
  todos.value = webTodos
})
</script>

<style scoped></style>
