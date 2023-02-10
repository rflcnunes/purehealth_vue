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
@import url("https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.font-family {
  &-primary {
    font-family: "Public Sans", sans-serif;
  }

  &-secondary {
    font-family: "Bitter", serif;
  }
}

.font-size {
  &-xs {
    font-size: 12px;
  }

  &-sm {
    font-size: 14px;
  }

  &-md {
    font-size: 16px;
  }

  &-lg {
    font-size: 18px;
  }

  &-display-xs {
    font-size: 24px;
  }

  &-display-sm {
    font-size: 30px;
  }

  &-display-md {
    font-size: 36px;
  }

  &-display-lg {
    font-size: 48px;
  }

  &-display-xl {
    font-size: 60px;
  }

  &-display-2xl {
    font-size: 72px;
  }
}

.font-weight {
  &-regular {
    font-weight: 500;
  }

  &-medium {
    font-weight: 400;
  }

  &-semibold {
    font-weight: 600;
  }

  &-bold {
    font-weight: 700;
  }
}
</style>
