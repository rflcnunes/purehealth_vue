<template>
  <button
    class="btn"
    @click="$emit('input', $event)"
    type="submit"
    :class="[
      primary,
      secondary,
      outlined,
      textBtn,
      navLink,
      errorBtn,
      darkBtn,
      primaryDark,
      `btn-${size}`,
    ]"
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
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  margin: 2px;
}

.btn {
  &-sm {
    padding: 6px 16px;
  }

  &-md {
    padding: 10px 20px;
  }

  &-lg {
    padding: 14px 24px;
  }

  &-xl {
    padding: 16px 32px;
  }
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
    box-shadow: none;
  }

  &:disabled {
    border: 1px solid $purple-light;
    background-color: $purple-light;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.secondary {
  border: 1px solid $purple-ultra-light;
  background-color: $purple-ultra-light;
  color: $purple-dark;

  &:hover {
    box-shadow: $input-blue-shadow;
  }

  &:active {
    border: 1px solid $purple-light;
    background-color: $purple-light;
    box-shadow: none;
  }

  &:disabled {
    border: 1px solid $purple-ultra-light;
    background-color: $purple-ultra-light;
    color: $purple-ultra-light-text;
    box-shadow: none;
    cursor: not-allowed;
  }
}
</style>
