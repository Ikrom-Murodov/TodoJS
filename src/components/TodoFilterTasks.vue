<template>
  <div class="todo-filter">
    <div class="todo-filter__content">
      <div
        :class="{
          'todo-filter__wrapper-button_active': classActive == 'returnTasks'
        }"
        class="todo-filter__wrapper-button"
      >
        <button
          @click="allTasks"
          title="Все задачи"
          class="todo-filter__button-list"
        >
          <todo-svg-list
            :class="{ svg_active: classActive == 'returnTasks' }"
          ></todo-svg-list>
        </button>
      </div>

      <div
        :class="{
          'todo-filter__wrapper-button_active':
            classActive == 'returnCompletedTasks'
        }"
        class="todo-filter__wrapper-button"
      >
        <button
          @click="completedTasks"
          title="Выполненые задачи"
          class="todo-filter__button-performed"
        >
          <todo-svg-performed
            :class="{ svg_active: classActive == 'returnCompletedTasks' }"
          ></todo-svg-performed>
        </button>
      </div>

      <div
        :class="{
          'todo-filter__wrapper-button_active':
            classActive == 'returnFailedTasks'
        }"
        class="todo-filter__wrapper-button"
      >
        <button
          @click="failedTasks"
          title="Не выполненые задачи"
          class="todo-filter__button-no-performed"
        >
          <todo-svg-not-performed
            :class="{ svg_active: classActive == 'returnFailedTasks' }"
          ></todo-svg-not-performed>
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
  },
  methods: {
    allTasks() {
      this.$store.commit("editMode", "returnTasks");
    },
    completedTasks() {
      this.$store.commit("editMode", "returnCompletedTasks");
    },
    failedTasks() {
      this.$store.commit("editMode", "returnFailedTasks");
    }
  },
  computed: {
    classActive() {
      return this.$store.state.mode;
    }
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
