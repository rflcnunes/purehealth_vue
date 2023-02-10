import { shallowMount } from "@vue/test-utils";
import TheTypography from "@/components/atoms/TheTypography.vue";

describe("TheTypography.vue", () => {
  it("renders the correct text", () => {
    const text = "Hello TheTypography Test Text";
    const wrapper = shallowMount(TheTypography, {
      propsData: {
        text: text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it("renders the correct font size", () => {
    const size = "sm";
    const wrapper = shallowMount(TheTypography, {
      propsData: {
        textSize: size,
      },
    });
    expect(wrapper.props().textSize).toBe(size);
  });

  it("renders the correct display size", () => {
    const size = "lg";
    const wrapper = shallowMount(TheTypography, {
      propsData: {
        displaySize: size,
      },
    });
    expect(wrapper.props().displaySize).toBe(size);
  });

  it("renders the correct font weight", () => {
    const weight = "bold";
    const wrapper = shallowMount(TheTypography, {
      propsData: {
        weight: weight,
      },
    });
    expect(wrapper.props().weight).toBe(weight);
  });

  it("renders the correct font family", () => {
    const type = "secondary";
    const wrapper = shallowMount(TheTypography, {
      propsData: {
        type: type,
      },
    });

    const childElement = wrapper.find(`.font-family-${type}`);
    const classes = childElement.classes();

    expect(classes).toContain(`font-family-${type}`);
  });
});
