<template>
  <div class="the_typography">
    <div
      :class="[
        `font-family-${type}`,
        `font-size-${textSize}`,
        `font-size-display-${displaySize}`,
        `font-weight-${weight}`,
      ]"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTypography",
  props: {
    textSize: {
      type: String,
      default: "",
    },
    displaySize: {
      type: String,
      default: "",
    },
    weight: {
      type: String,
      default: "regular",
    },
    type: {
      type: String,
      default: "primary",
    },
    text: {
      type: String,
      default: "Texto padrão",
    },
  },
};
</script>

<style lang="scss" scoped>
.font-family {
  &-primary {
    font-family: $font-primary;
  }

  &-secondary {
    font-family: $font-secondary;
  }
}

.font-size {
  &-xs {
    font-size: $font-size-xs;
  }

  &-sm {
    font-size: $font-size-sm;
  }

  &-md {
    font-size: $font-size-md;
  }

  &-lg {
    font-size: $font-size-lg;
  }

  &-display-xs {
    font-size: $font-size-display-xs;
  }

  &-display-sm {
    font-size: $font-size-display-sm;
  }

  &-display-md {
    font-size: $font-size-display-md;
  }

  &-display-lg {
    font-size: $font-size-display-lg;
  }

  &-display-xl {
    font-size: $font-size-display-xl;
  }

  &-display-2xl {
    font-size: $font-size-display-2xl;
  }
}

.font-weight {
  &-regular {
    font-weight: $font-weight-regular;
  }

  &-medium {
    font-weight: $font-weight-medium;
  }

  &-semibold {
    font-weight: $font-weight-semibold;
  }

  &-bold {
    font-weight: $font-weight-bold;
  }
}
</style>
