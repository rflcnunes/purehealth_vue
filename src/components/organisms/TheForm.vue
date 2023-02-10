<template>
  <div class="the_form">
    <TheTypography text="Family text tests" displaySize="xs" />
    <TheTypography type="primary" textSize="lg" />
    <TheTypography type="secondary" textSize="lg" />

    <TheTypography text="Weight tests" displaySize="xs" />
    <TheTypography weight="medium" textSize="md" />
    <TheTypography weight="semibold" textSize="md" />
    <TheTypography weight="bold" textSize="md" />

    <TheTypography text="Size text tests" displaySize="xs" />
    <TheTypography textSize="xs" />
    <TheTypography textSize="sm" />
    <TheTypography textSize="md" />
    <TheTypography textSize="lg" />

    <TheTypography text="Size display tests" displaySize="xs" />
    <TheTypography displaySize="xs" />
    <TheTypography displaySize="sm" />
    <TheTypography displaySize="md" />
    <TheTypography displaySize="lg" />
    <TheTypography displaySize="xl" />
    <TheTypography displaySize="2xl" />
  </div>
</template>

<script>
import TheTypography from "../atoms/TheTypography.vue";

export default {
  name: "TheForm",
  data() {
    return {
      //
    };
  },
  components: { TheTypography },
};
</script>

<style lang="scss" scoped>
//
</style>
