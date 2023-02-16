<template>
  <div class="about">
    <TheTypography
      class="color_text"
      :text="`Hello, ${name}`"
      displaySize="sm"
    />
    <TheTypography
      class="color_text"
      text="Thanks for testing!"
      displaySize="sm"
    />
    <TheTypography
      class="color_text"
      text="Tell me what you think"
      displaySize="sm"
    />
    <div class="actions">
      <a href="https://github.com/rflcnunes" target="_blank">
        <TheIconSvg size="2xl" icon="github" />
      </a>

      <a href="https://www.linkedin.com/in/rflcstnunes/" target="_blank">
        <TheIconSvg :glassmorphism="true" size="2xl" icon="linkedin" />
      </a>
    </div>
  </div>
</template>

<script>
import TheIconSvg from "@/components/atoms/TheIconSvg.vue";
import TheTypography from "@/components/atoms/TheTypography.vue";

export default {
  components: {
    TheTypography,
    TheIconSvg,
  },
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.getNameFromLocalStorage();
  },
  methods: {
    getNameFromLocalStorage() {
      const myForm = JSON.parse(localStorage.getItem("myForm"));
      if (myForm) {
        this.name = myForm.username;
        this.$toast.success("Hello, " + this.name);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  background-color: $primary-gray;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .color_text {
    color: $light-gray;
  }

  .actions {
    width: 100%;
    display: grid;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    grid-gap: 10px;
    padding: 100px 0 0 0;
  }
}
</style>
