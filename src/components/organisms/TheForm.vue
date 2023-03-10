<template>
  <div
    class="the_form"
    :class="{
      mobile: $mq === 'mobile',
      tablet: $mq === 'tablet',
      desktop: $mq === 'desktop',
    }"
  >
    <div id="content_box">
      <div class="header">
        <img
          v-if="$mq === 'desktop'"
          id="logo"
          src="../../assets/formHeaderLogo.svg"
          alt="header logo"
        />
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
        <TheCheckbox
          @change="form.checkbox = $event"
          label="I agree with the terms ad privacy"
        />
        <TheButton
          @input="submitForm()"
          class="ultraWideBtn primary"
          size="lg"
          label="Sign Up"
          :isDisabled="!submitIsValid"
        />
        <div class="form_actions_information">
          <div class="line"></div>
          <div class="description">
            <TheTypography text="Or continue with" textSize="sm" />
          </div>
          <div class="line"></div>
        </div>
        <div class="form_actions_social_media">
          <TheSocialMediaButton
            class="ultraWideBtn"
            icon="facebook"
            label="Continue with Facebook"
            @input="$toast('Only for handsome')"
          />
          <TheSocialMediaButton
            class="ultraWideBtn"
            icon="google"
            label="Continue with Google"
            @input="$toast('This too only for handsome')"
          />
          <TheSocialMediaButton
            class="ultraWideBtn"
            icon="apple"
            label="Continue with Apple"
            @input="$toast('... for handsome')"
          />
        </div>
        <div class="form_actions_already_have_account">
          <TheTypography
            class="textAlreadyHavaAnAccount"
            text="Already have an account?"
            textSize="sm"
          />
          <TheButton
            @input="$toast.success('Logged!')"
            class="textBtn"
            size="sm"
            label="Log In"
          />
        </div>
      </div>
    </div>
    <div v-if="$mq === 'desktop'" class="body_background">
      <img src="../../assets/homeBackground.svg" alt="background" />
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import TheInput from "../atoms/TheInput.vue";
import TheTypography from "../atoms/TheTypography.vue";
import TheCheckbox from "../atoms/TheCheckbox.vue";
import TheButton from "../atoms/TheButton.vue";
import TheSocialMediaButton from "../atoms/TheSocialMediaButton.vue";

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
        checkbox: false,
      },
    };
  },
  components: {
    TheTypography,
    TheInput,
    TheCheckbox,
    TheButton,
    TheSocialMediaButton,
  },
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
  computed: {
    submitIsValid() {
      const { username, email, password, confirmPassword } = this.form;
      if (
        username &&
        email &&
        password &&
        confirmPassword !== "" &&
        this.form.checkbox
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    submitForm() {
      const { username, email, password } = this.form;
      if (username && email && password !== "") {
        localStorage.setItem("myForm", JSON.stringify(this.form));
        this.$router.push({ name: "about" });
      } else {
        this.$toast.error("Please fill in all fields!");
      }
    },
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

  .form_actions {
    .form_actions_already_have_account {
      .textAlreadyHavaAnAccount {
        color: $primary-gray;
      }
    }
  }
}

.mobile,
.tablet,
.desktop {
  width: 99%;

  #content_box {
    padding: 16px 32px;
  }

  .header {
    margin: 0 0 24px 0;
  }

  .form_actions {
    display: grid;
    grid-gap: 24px;

    &_information {
      display: grid;
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

    &_social_media {
      display: grid;
      grid-gap: 8px;
    }

    &_already_have_account {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.mobile {
  .form {
    display: grid;
    grid-gap: 16px;
    margin: 0 0 24px 0;
  }

  .form_actions {
    &_information {
      grid-template-columns: 1fr 1.3fr 1fr;
    }

    &_social_media {
      width: 100%;
    }
  }
}

.tablet {
  .form {
    display: grid;
    grid-gap: 16px;
    margin: 0 0 24px 0;
  }

  .form_actions {
    &_information {
      grid-template-columns: 1fr 1.3fr 1fr;
    }
  }
}

.desktop {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .form {
    display: grid;
    grid-gap: 16px;
    margin: 0 0 24px 0;
  }

  #content_box {
    padding: 0 120px;

    .header {
      #logo {
        margin: 60px 0 24px 0;
      }
    }

    .form_actions {
      &_information {
        grid-template-columns: 1fr 1.3fr 1fr;
      }
    }
  }
}
</style>
