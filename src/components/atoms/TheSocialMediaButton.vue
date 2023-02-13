<template>
  <button
    class="btn"
    @click="$emit('input', $event)"
    type="submit"
    :class="[`btn-${size}`]"
    :disabled="isDisabled"
  >
    <TheIconSvg size="sm" :icon="icon" />
    <TheTypography :text="label" :textSize="size" />
  </button>
</template>

<script>
import TheIconSvg from "./TheIconSvg.vue";
import TheTypography from "./TheTypography.vue";

export default {
  name: "TheSocialMediaButton",
  components: {
    TheTypography,
    TheIconSvg,
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
    icon: {
      type: String,
      default: "",
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
  border: 0;
  background-color: $light-bg;
  display: grid;
  grid-template-columns: 0.2fr auto;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: $disabled-gray;
  }
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
</style>
