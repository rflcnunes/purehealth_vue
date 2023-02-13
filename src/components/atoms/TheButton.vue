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
      errorBtn,
      errorLightBtn,
      ultraWideBtn,
      `btn-${size}`,
    ]"
    :disabled="isDisabled"
  >
    <TheTypography :text="label" :textSize="size" />
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

.ultraWideBtn {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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

.outlined {
  border: 1px solid $light-gray;
  background-color: transparent;
  color: black;

  &:active {
    border: 1px solid $light-gray;
    background-color: transparent;
    box-shadow: $input-blue-shadow;
  }

  &:disabled {
    border: 1px solid $light-gray;
    background-color: transparent;
    color: $light-gray;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.textBtn {
  border: 0;
  background-color: transparent;
  color: $purple;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    border: 1px solid $light-gray;
    background-color: transparent;
    box-shadow: $input-blue-shadow;
  }

  &:disabled {
    border: 0;
    text-decoration: none;
    background-color: transparent;
    color: $purple-light;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.errorBtn {
  border: 1px solid $input-error;
  background-color: $input-error;
  color: white;

  &:hover {
    box-shadow: $input-blue-shadow;
  }

  &:active {
    border: 1px solid $input-error-dark;
    background-color: $input-error-dark;
    box-shadow: none;
  }

  &:disabled {
    border: 1px solid $input-error-light;
    background-color: $input-error-light;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.errorLightBtn {
  border: 1px solid $red-error-light;
  background-color: $red-error-light;
  color: $input-error-dark;

  &:hover {
    box-shadow: $input-blue-shadow;
  }

  &:active {
    border: 1px solid $red-active-light;
    background-color: $red-active-light;
    box-shadow: none;
  }

  &:disabled {
    border: 1px solid $input-error-light;
    background-color: $input-error-light;
    box-shadow: none;
    color: $red-error-light;
    cursor: not-allowed;
  }
}
</style>
