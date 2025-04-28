<template>
  <TransitionGroup name="list" tag="ul" class="todo-list">
    <article v-for="todo in todos" :key="todo.id" class="todo">
      <p>{{ todo.todo }}</p>
      <p v-if="todo.completed">{completed}</p>
    </article>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { Todo } from '@/assets/types'

const props = defineProps<{
  todos: Todo[]
}>()
</script>

<style scoped></style>
