<template>
  <div class="content">
    <div class="content__container">
      <div class="content__todo">
        <todo-create-tasks>
          <template v-slot:form>
            <todo-form></todo-form>
          </template>
        </todo-create-tasks>
      </div>
    </div>
  </div>
</template>

<script>
import TodoCreateTasks from "./components/TodoCreateTasks";
import TodoForm from "./components/TodoForm";

export default {
  data() {
    return {};
  },
  components: {
    "todo-create-tasks": TodoCreateTasks,
    "todo-form": TodoForm
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>

<style lang="sass">
@import "./style/base"
</style>
