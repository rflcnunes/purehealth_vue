<template>
  <div
    class="the_form"
    :class="{
      mobile: $mq === 'mobile' || 'tablet',
      desktop: $mq === 'desktop',
    }"
  >
    <div class="header">
      <TheTypography text="Welcome Back" displaySize="sm" />
      <TheTypography text="Hop back in!" textSize="lg" color="primary-gray" />
    </div>
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
.the_form {
  display: grid;
  grid-auto-flow: column;

  .header {
    display: grid;
    grid-auto-flow: row;
    justify-content: flex-start;
  }
}

.mobile {
  //

  .header {
    //
  }
}

.desktop {
  //

  .header {
    //
  }
}
</style>
