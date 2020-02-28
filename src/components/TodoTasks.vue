<template>
  <div class="todo-tasks">
    <div class="todo-tasks__content">
      <div class="todo-tasks__content-task">
        <div v-show="show" class="todo-tasks__wrapper-title">
          <h1 class="todo-tasks__title">{{ title }}</h1>
        </div>

        <div v-show="!show" class="todo-tasks__edit">
          <input
            v-model.lazy="title"
            class="todo-tasks__edit-title"
            type="text"
          />
          <input
            v-model.lazy="description"
            class="todo-tasks__edit-description"
            type="text"
          />
        </div>

        <div v-show="show" class="todo-tasks__wrapper-description">
          <button class="todo-tasks__button-performed">
            <todo-svg-tasks-performed></todo-svg-tasks-performed>
          </button>
          <span class="todo-tasks__description">{{ description }}</span>
        </div>

        <div class="todo-tasks__wrapper-buttons">
          <button @click="editTask" class="todo-tasks__button-edit-task">
            {{ buttonTitle }}
          </button>
          <button v-show="show" class="todo-tasks__button-delete-task">
            Удалить задачу
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoSvgTasksPerformed from "./TodoSvgTasksPerformed";
export default {
  components: {
    "todo-svg-tasks-performed": TodoSvgTasksPerformed
  },
  data() {
    return {
      title: "Title",
      description: "description",
      buttonTitle: "Изменить задачу",
      show: true
    };
  },
  methods: {
    editTask() {
      this.show = !this.show;
      this.buttonTitle = this.show ? "Изменить задачу" : "Сохранить задачу";
    }
  }
};
</script>

<style lang="sass" scoped>
.todo-tasks

  &__content
    margin-top: 1rem

  &__content-task
    border: .2rem solid #33B5E5
    border-radius: 1rem
    padding: 1rem

  &__wrapper-title
    text-align: center

  &__title
    color: #6C757D
    font-size: 2.5rem

  &__description
    padding: 0
    margin-top: .6rem
    font-size: 1.6rem
    line-height: 1.5
    letter-spacing: .1rem
    color: #747373

  &__button-edit-task, &__button-delete-task
    font-size: 1.8rem
    color: #33B5E5
    border: .1rem solid #33B5E5
    background-color: white
    padding: .5rem 1rem
    border-radius: 1rem
    cursor: pointer
    transition: background-color .4s, color .4s
    margin-right: 1rem
    outline: none

    &:hover
      color: white
      background-color: #33B5E5

  &__wrapper-description
    display: flex
    align-items: center

  &__button-performed
    border: none
    background-color: white
    outline: none


  &__wrapper-buttons
    margin-top: 1rem

  &__performed-title, &__performed-description
    text-decoration: line-through
    color: #979DA3

  &__edit-description, &__edit-title
    width: 100%
    color: #6C757D
    font-size: 1.6rem
    border: .1rem solid #DEDEDD
    border-radius: .4rem
    padding: 1rem
    margin-top: 1rem
    outline: none
    transition: box-shadow .4s, border-color .4s

    &:focus
      box-shadow: 0 0 .1rem .2rem rgb(191,222,255);
      border-color: white

@media screen and (max-width: 500px)
  .todo-tasks

    &__wrapper-buttons
      margin: 0

    &__button-edit-task
      margin: 1rem 1rem 1rem 0rem
</style>
