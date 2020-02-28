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
      </div>
    </div>
  </div>
</template>

<script>
import TodoCreateTasks from "./components/TodoCreateTasks";
import TodoForm from "./components/TodoForm";
import TodoFilterTasks from "./components/TodoFilterTasks";

export default {
  data() {
    return {};
  },
  components: {
    "todo-create-tasks": TodoCreateTasks,
    "todo-form": TodoForm,
    "todo-filter-tasks": TodoFilterTasks
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>

<style lang="sass">
@import "./style/base"
</style>
