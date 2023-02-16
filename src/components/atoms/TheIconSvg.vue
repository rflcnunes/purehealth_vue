<template>
  <div :class="`glassmorphism icon-${size}`">
    <div class="icon-wrapper">
      <img :src="iconUrl" alt="icon" />
    </div>
  </div>
</template>
<script>
export default {
  name: "TheIconSvg",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
    },
  },
  computed: {
    iconUrl() {
      return require(`@/assets/original/${this.icon}.svg`);
    },
  },
};
</script>
<style lang="scss" scoped>
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  padding: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
  }

  &-sm {
    width: 24px;
  }

  &-md {
    width: 28px;
  }

  &-lg {
    width: 30px;
  }

  &-xl {
    width: 32px;
  }
}
</style>
