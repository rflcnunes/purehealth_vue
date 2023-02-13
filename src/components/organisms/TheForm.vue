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
      <TheTypography
        class="header_subtitle"
        text="Hop back in!"
        textSize="lg"
        color="primary-gray"
      />
    </div>
    <div class="form">
      <TheInput
        v-model="form.email"
        label="Email Address"
        placeholder="email@example.com"
        errorMessage="Enter a valid email address"
        successMessage="OK!"
        inputType="email"
      />
      <TheInput
        v-model="form.username"
        label="Username"
        placeholder=" "
        errorMessage="Enter a valid username"
        successMessage="OK!"
        inputType="text"
      />
      <TheInput
        v-model="form.password"
        label="Password"
        placeholder="At least 8 characters"
        errorMessage="Enter a valid password"
        successMessage="OK!"
        inputType="password"
      />
      <TheInput
        v-model="form.confirmPassword"
        label="Confirm Password"
        placeholder=" "
        errorMessage="Enter a valid password"
        successMessage="OK!"
        inputType="password"
      />
    </div>
    <div class="form_actions">
      <TheCheckbox label="I agree with the terms ad privacy" />
      <TheButton class="ultraWideBtn primary" size="lg" label="Sign Up" />
      <div class="form_actions_information">
        <div class="line"></div>
        <div class="description">
          <TheTypography text="Or continue with" textSize="sm" />
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import TheInput from "../atoms/TheInput.vue";
import TheTypography from "../atoms/TheTypography.vue";
import TheCheckbox from "../atoms/TheCheckbox.vue";
import TheButton from "../atoms/TheButton.vue";

export default {
  name: "TheForm",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  components: { TheTypography, TheInput, TheCheckbox, TheButton },
  validations() {
    return {
      confirmPassword: {
        customValidation:
          this.form.confirmPassword != ""
            ? (v) => v === this.form.password
            : (v) => !isNaN(v),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.the_form {
  display: grid;
  grid-auto-flow: row;

  .header {
    display: grid;
    grid-auto-flow: row;
    justify-content: flex-start;

    &_subtitle {
      margin: 8px 0;
    }
  }

  .form {
    //
  }
}

.mobile {
  width: 99%;

  .header {
    margin: 0 0 24px 0;
  }

  .form {
    display: grid;
    grid-gap: 16px;
    margin: 0 0 24px 0;
  }

  .form_actions {
    display: grid;
    grid-gap: 24px;

    &_information {
      display: grid;
      grid-template-columns: 1fr 0.7fr 1fr;
      align-items: center;
      .line {
        border: 0.5px solid $blue-gray;
        height: 0;
      }

      .description {
        display: flex;
        justify-content: center;
        color: $blue-gray;
      }
    }
  }
}

.desktop {
  width: 40%;

  .header {
    //
  }
}
</style>
