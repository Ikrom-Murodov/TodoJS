<template>
  <div class="content">
    <div class="content__container">
      <div class="content__todo">
        <todo-create-tasks>
          <template v-slot:form>
            <todo-form></todo-form>
          </template>
        </todo-create-tasks>

        <todo-filter-tasks></todo-filter-tasks>

        <todo-tasks
          v-for="items in returnSortedTasks"
          :Data="items"
          :key="items.id"
        ></todo-tasks>
      </div>
    </div>
  </div>
</template>

<script>
import TodoCreateTasks from "./components/TodoCreateTasks";
import TodoForm from "./components/TodoForm";
import TodoFilterTasks from "./components/TodoFilterTasks";
import TodoTasks from "./components/TodoTasks";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "todo-create-tasks": TodoCreateTasks,
    "todo-form": TodoForm,
    "todo-filter-tasks": TodoFilterTasks,
    "todo-tasks": TodoTasks
  },

  computed: {
    ...mapGetters("main", [
      "getModeTasks",
      "getAllTasks",
      "getCompletedTasks",
      "getTasksNotCompleted"
    ]),

    returnSortedTasks() {
      return this[this.getModeTasks];
    },

    returnAllTasks() {
      return this.getAllTasks;
    }
  },

  methods: {
    ...mapActions("main", ["getDataFromLs", "saveDataToLs"])
  },

  watch: {
    returnAllTasks: {
      handler() {
        this.saveDataToLs();
      },
      deep: true
    }
  },

  created() {
    this.getDataFromLs();
  }
};
</script>

<style lang="sass">
@import "./style/base"
</style>
