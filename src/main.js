import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMq from "vue-mq";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 767,
    tablet: 1200,
    desktop: Infinity,
  },

  defaultBreakpoint: "tablet",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
