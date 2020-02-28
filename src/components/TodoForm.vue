<template>
  <form @submit.prevent class="form todo__form" action="#">
    <div class="form__wrapper-input-title">
      <label
        :class="{ form__label_error: errorClass('title') }"
        class="form__label-title"
        for="form-input-title"
        >{{ getErrorText("title", "Загаловок", "5") }}</label
      >
      <input
        v-model.trim="title"
        @blur="$v.title.$touch()"
        id="form-input-title"
        type="text"
        class="form__input-title"
        :class="{ form__input_error: errorClass('title') }"
      />
    </div>
    <div class="form__wrapper-input-description">
      <label
        :class="{ form__label_error: errorClass('description') }"
        class="form__label-description"
        for="form-input-description"
        >{{ getErrorText("description", "Описание", "10") }}</label
      >

      <textarea
        v-model="description"
        @blur="$v.description.$touch()"
        :class="{ form__input_error: errorClass('description') }"
        id="form-input-description"
        class="form__input-description"
      ></textarea>
    </div>

    <div class="form__wrapper-button">
      <button
        :disabled="this.$v.$invalid"
        @click="saveData"
        type="submit"
        class="form__button"
      >
        Создать задачу
      </button>
    </div>
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  methods: {
    errorClass(type) {
      return this.$v[type].$dirty && this.$v[type].$error;
    },
    getErrorText(type, title, value) {
      return this.$v[type].minLength
        ? `${title}`
        : `Меньше чем ${value} символов вести нельзя`;
    },
    saveData() {
      this.title = this.description = "";
      this.$v.$reset();
    }
  },
  data() {
    return {
      title: "",
      description: ""
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(5)
    },
    description: {
      required,
      minLength: minLength(10)
    }
  }
};
</script>

<style lang="sass" scoped>

// Form Todo
$form-label-color:  #6C757D
$form-label-font-size: 1.6rem
$form-input-border-color: #CED4DA
$form-input-color:  #6C757D
$form-input-font-size: 1.6rem

// Form Button
$form-button-border-color: #33B5E5
$form-button-background-color: white
$form-button-font-size: 1.6rem
$form-button-color: #33B5E5

.form

  &__wrapper-input-description
    margin-top: 1rem

  &__label-title, &__label-description
    font-size: $form-label-font-size
    color: $form-label-color
    cursor: pointer

  &__label_error
    color: red

  &__input-title, &__input-description
    width: 100%
    border: .1rem solid $form-input-border-color
    border-radius: .5rem
    margin-top: .5rem
    padding: 1rem
    color: $form-input-color
    font-size: $form-input-font-size
    outline: none
    transition: box-shadow .4s, border-color .4s

    &:focus
      box-shadow: 0 0 .1rem .2rem rgb(191,222,255);
      border-color: white

  &__input_error
    border: .1rem solid red
    color: red

    &:focus
      box-shadow: 0 0 .1rem .2rem rgb(255,0,0);


  &__input-description
    max-width: 100%
    min-width: 20rem

  &__wrapper-button
    margin-top: 1rem

  &__button
    width: 40%
    padding: 1rem
    border: .2rem solid $form-button-border-color
    border-radius: .5rem
    background-color: $form-button-background-color
    font-size: $form-button-font-size
    color: $form-button-color
    text-transform: uppercase
    letter-spacing: .1rem
    outline: none
    cursor: pointer
    transition: color .4s, background-color .4s

    &:hover
      color: white
      background-color: #33B5E5

@media screen and (max-width: 500px)
  .form

    &__button
      font-size: 1.4rem
      width: auto

    &__label-title, &__label-description
      font-size: 1.4rem
</style>
