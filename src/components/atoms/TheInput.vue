<template>
  <div id="the_input">
    <TheTypography id="label" for="input" :text="label" textSize="sm" />
    <input
      id="input"
      :type="inputType"
      :value="value"
      @input="setValue"
      @blur="v$.value.$touch"
      :class="{
        default: !v$.value.$error,
        error: v$.value.$error,
        success: !v$.value.$invalid,
      }"
      :placeholder="placeholder"
    />
    <div
      class="message message_error"
      v-if="v$.value.$error && errorMessage !== ''"
    >
      <span class="material-icons icon">error_outline</span>
      <TheTypography class="text" :text="errorMessage" textSize="sm" />
    </div>

    <div
      class="message message_success"
      v-if="!v$.value.$invalid && successMessage !== ''"
    >
      <span class="material-icons icon">check_circle_outline</span>
      <TheTypography class="text" :text="successMessage" textSize="sm" />
    </div>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import TheTypography from "./TheTypography.vue";

export default {
  name: "TheInput",
  setup: () => ({ v$: useVuelidate() }),
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
    successMessage: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
  data: () => ({ value: "" }),
  validations() {
    return {
      value: {
        required,
        customValidation:
          this.inputType === "text"
            ? (v) => !!v && v.length >= 3
            : this.inputType === "email"
            ? (v) =>
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  v
                )
            : (v) => !isNaN(v),
      },
    };
  },
  methods: {
    setValue($event) {
      this.value = $event.target.value;
      this.v$.value.$touch();
      this.$emit("input", this.value);
    },
  },
  components: { TheTypography },
};
</script>

<style lang="scss" scoped>
#the_input {
  display: flex;
  flex-direction: column;
  text-align: start;
  max-width: 50%;

  #label {
    margin: 2px 0;
  }

  #input {
    border-radius: 4px;
    padding: 10px 12px;
    outline: 0;
  }
  .default {
    border: 1px solid $light-gray;

    &:hover,
    &:active,
    &:focus {
      box-shadow: $input-blue-shadow;
    }
  }

  .error {
    border: 1px solid $input-error;
  }

  .success {
    border: 1px solid $input-success;
  }
}

.message {
  display: grid;
  grid-template-columns: 0.1fr 3fr;
  align-items: center;
  justify-content: center;
  padding: 3px 0;
  grid-gap: 2px;

  .icon {
    font-size: 20px;
  }

  .text {
    margin: 2px 0;
  }
}

.message_error {
  color: $input-error;
}
.message_success {
  color: $input-success;
}
</style>
