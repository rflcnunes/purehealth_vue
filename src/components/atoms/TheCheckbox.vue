<template>
  <div id="checkbox_component">
    <div
      id="the_checkbox"
      @click="clickDisabled"
      :class="{
        checked: checked && !isDisabled,
        unchecked: !checked && !isDisabled,
        disabled: isDisabled,
      }"
    >
      <span v-if="checked" class="material-icons icon">done</span>
    </div>
    <TheTypography class="text" :text="label" textSize="sm" />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import TheTypography from "./TheTypography.vue";

export default {
  name: "TheCheckbox",
  components: { TheTypography },
  props: {
    isRequired: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    clickDisabled() {
      if (!this.isDisabled) {
        return () => {
          this.checked = !this.checked;
        };
      }
      return () => {};
    },
  },
  validations: {
    checked: {
      required: required,
    },
  },
  methods: {
    validate() {
      this.$v.$touch();
      if (!this.$v.$error) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#checkbox_component {
  display: grid;
  grid-template-columns: 0.1fr 3fr;
  align-items: center;
  grid-gap: 4px;

  #label {
    display: flex;
    align-items: flex-start;
  }
}

#the_checkbox {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
}

.unchecked {
  border: 1px solid $blue-gray;
}

.unchecked:hover {
  box-shadow: $input-blue-shadow;
}

.checked {
  color: #fff;
  background-color: $purple;
  border: 1px solid $purple;
}

.checked:hover {
  box-shadow: none;
}

.disabled {
  border: 1px solid $disabled-gray;
  box-shadow: 0;
  outline: none;
}
</style>
