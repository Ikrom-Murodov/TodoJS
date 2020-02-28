<template>
  <div class="todo-filter">
    <div class="todo-filter__content">
      <div class="todo-filter__wrapper-button">
        <button title="Все задачи" class="todo-filter__button-list">
          <todo-svg-list></todo-svg-list>
        </button>
      </div>

      <div class="todo-filter__wrapper-button">
        <button title="Выполненые задачи" class="todo-filter__button-performed">
          <todo-svg-performed></todo-svg-performed>
        </button>
      </div>

      <div class="todo-filter__wrapper-button">
        <button
          title="Не выполненые задачи"
          class="todo-filter__button-no-performed"
        >
          <todo-svg-not-performed></todo-svg-not-performed>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoSvgList from "./TodoSvgList";
import TodoSvgPerformed from "./TodoSvgPerformed";
import TodoSvgNotPerformed from "./TodoSvgNotPerformed";

export default {
  components: {
    "todo-svg-list": TodoSvgList,
    "todo-svg-performed": TodoSvgPerformed,
    "todo-svg-not-performed": TodoSvgNotPerformed
  }
};
</script>

<style lang="sass" scoped>
.todo-filter

  &__content
    display: flex
    justify-content: space-between
    padding: 1rem 0 0 0

  &__wrapper-button
    width: 33%
    text-align: center

  &__button-list, &__button-performed, &__button-no-performed
    border: none
    background-color: white
    outline: none
    cursor: pointer

  &__wrapper-button_active
    border-bottom: .2rem solid #33B5E5
</style>
