<template>
  <button
    class="btn"
    @click="$emit('input', $event)"
    type="submit"
    :class="{
      primary,
      secondary,
      outlined,
      textBtn,
      navLink,
      errorBtn,
      darkBtn,
      primaryDark,
    }"
    :disabled="isDisabled"
  >
    <TheTypography :text="label" textSize="sm" />
  </button>
</template>

<script>
import TheTypography from "./TheTypography.vue";

export default {
  name: "TheButton",
  components: {
    TheTypography,
  },
  data() {
    return {
      value: "",
    };
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 15px;
  border-radius: 6px;
}
.primary {
  border: 1px solid $purple;
  background-color: $purple;
  color: white;

  &:hover {
    box-shadow: $input-blue-shadow;
  }

  &:active {
    border: 1px solid $purple-dark;
    background-color: $purple-dark;
  }

  &:disabled {
    border: 1px solid $purple-light;
    background-color: $purple-light;
    box-shadow: none;
    cursor: not-allowed;
  }
}
</style>
