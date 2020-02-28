<template>
  <div class="todo">
    <div class="todo__create-task">
      <div class="todo__wrapper-title">
        <h1 class="todo__title">Create Task</h1>
      </div>
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
$todo-wrapper-title-background-color: #33B5E5
$todo-create-task-border-color: #DEDEDD
$todo-title-color: white
$todo-title-font-size: 3rem

.todo

  &__create-task
    border: .1rem solid $todo-create-task-border-color
    height: auto
    border-radius: .5rem

  &__wrapper-title
    background-color: $todo-wrapper-title-background-color
    text-align: center
    border-top-right-radius: .5rem
    border-top-left-radius: .5rem
    padding: 1rem

  &__title
    font-size: $todo-title-font-size
    color: $todo-title-color
    letter-spacing: .1rem

  &__form
    padding: 1rem
</style>
